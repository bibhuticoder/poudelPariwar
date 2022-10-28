import React from "react"
import { FAMILY_TREE_MODE } from "../../enums"
import oldPaperImage from "../../public/images/old-paper.jpg"
import { BsCloudDownload } from 'react-icons/bs'
import { FamilyTreeModal } from "./FamilyTreeModal"
import { DownloadModal } from "../DownloadModal/DownloadModal"
import { Person } from "../../types"
import { transformTree, searchTree } from "../../utils/family-tree.util"

type Props = {
    activePersonId: String | null
};

type State = {
    treeDataRaw: any
    treantData: any
    treant: any
    showDownloadModal: Boolean
    activePerson: Person | null
};

declare var Treant: any;

export class FamilyTree extends React.Component<Props, State> {

    private familyTreeRef;
    constructor(props: any) {
        super(props);
        this.state = {
            treantData: null,
            treeDataRaw: null,
            treant: null,
            showDownloadModal: false,
            activePerson: null
        };
        this.familyTreeRef = React.createRef()
    }

    async componentDidMount() {
        await this.fetchData(() => this.initTreant());

        if (this.props.activePersonId)
            this.setState({ activePerson: searchTree(this.props.activePersonId, this.state.treeDataRaw) })
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.activePersonId != this.props.activePersonId) {
            this.setState({ activePerson: searchTree(this.props.activePersonId, this.state.treeDataRaw) });
        }
    }

    componentWillUnmount(): void {
        this.setState({ treant: null });
    }

    fetchData = async (callback: any) => {
        let resp = await fetch('family-tree-data.json');
        let json = await resp.json();
        this.setState({ treantData: transformTree(json), treeDataRaw: json }, () => callback());
    }

    initTreant = () => {
        if (Treant && this.state.treantData && !this.state.treant) {
            let treant = new Treant({
                chart: {
                    container: "#family-tree",
                    levelSeparation: 50,
                    nodeAlign: 'BOTTOM',
                    rootOrientation: 'NORTH',

                    connectors: {
                        type: "step",

                        style: {
                            "arrow-end": "open-wide-medium",
                            "stroke": "#998B70",
                            "stroke-width": "2.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        },
                    },
                    node: {
                        HTMLclass: "node",
                    },
                },
                nodeStructure: this.state.treantData,
            });
            this.setState({ treant });

            if (typeof window !== "undefined") {
                window.document.querySelectorAll(".person").forEach(person => {
                    person.addEventListener('click', (event) => {
                        let id = person.getAttribute("id");
                        window.document.dispatchEvent(new CustomEvent('show-person-detail', { detail: id }));
                    })
                })
            }
        } else console.log(Treant, this.state.treantData, this.state.treant);
    }

    handleDownloadClick = () => {
        this.setState({ showDownloadModal: true });
    }

    render() {

        const treeClass = () => {
            let classNames = ['rounded-md'];
            return classNames.join(' ');
        };

        return (
            <section id="chronicles" className="relative">
                <div className="mx-auto px-4">
                    <div className="toolbar flex justify-end">
                        <button onClick={this.handleDownloadClick} className="bg-gray-200 rounded-md px-3 py-2 m-2" title="Download">
                            <BsCloudDownload />
                        </button>
                    </div>

                    <div className="relative overflow-x-auto">
                        <div id="family-tree" ref={this.familyTreeRef as React.RefObject<HTMLDivElement>} className={treeClass()} style={{
                            backgroundImage: `url(${oldPaperImage.src})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }} />
                    </div>

                </div>

                {this.state.activePerson && <FamilyTreeModal person={this.state.activePerson} onClose={() => this.setState({ activePerson: null })} />}

                {this.state.showDownloadModal && <DownloadModal loading={false} familyTreeRef={this.familyTreeRef.current} onClose={() => this.setState({ showDownloadModal: false })} />}
            </section>
        );
    }
};