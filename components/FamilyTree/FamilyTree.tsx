import React from "react"
import { FAMILY_TREE_DATA } from "./data"
import { FAMILY_TREE_MODE } from "../../enums"
import oldPaperImage from "../../public/images/old-paper.jpg"
import { BsCloudDownload } from 'react-icons/bs'
import { FamilyTreeModal } from "./FamilyTreeModal"
import { DownloadModal } from "../DownloadModal/DownloadModal"
import { Person } from "../../types"

type Props = {
    mode: FAMILY_TREE_MODE
    activePerson: Person | null
};

type State = {
    treant: any
    mode: FAMILY_TREE_MODE
    showDownloadModal: Boolean
};

declare var Treant: any;

export class FamilyTree extends React.Component<Props, State> {

    private familyTreeRef;
    constructor(props: any) {
        super(props);
        this.state = {
            treant: null,
            mode: this.props.mode,
            showDownloadModal: false
        };
        this.familyTreeRef = React.createRef()
    }

    componentDidMount() {
        this.initTreant();
    }

    componentWillUnmount(): void {
        this.setState({ treant: null });
    }

    initTreant = () => {
        if (Treant && !this.state.treant) {
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
                nodeStructure: FAMILY_TREE_DATA(this.state.mode),
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
        }
    }

    handleModeChange = (event: any) => {
        this.setState({ mode: event.target.value });
        if (this.familyTreeRef.current) {
            this.setState({ treant: null });
            (this.familyTreeRef.current as HTMLElement).innerHTML = "";
            setTimeout(() => this.initTreant(), 250);
        }
    }

    handleDownloadClick = () => {
        this.setState({ showDownloadModal: true });
    }

    render() {

        const treeClass = () => {
            let classNames = ['rounded-md'];
            classNames.push(' --' + { 0: 'min', 1: 'max' }[this.state.mode]);
            return classNames.join(' ');
        };

        return (
            <section id="chronicles" className="relative">
                <div className="mx-auto px-4">
                    <div className="toolbar flex justify-end">
                        <select onChange={this.handleModeChange} className="bg-gray-200 rounded-md px-3 py-2 m-2 outline-none">
                            <option value={FAMILY_TREE_MODE.MIN}> Min </option>
                            <option value={FAMILY_TREE_MODE.MAX}>Max</option>
                        </select>

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

                {this.props.activePerson && <FamilyTreeModal person={this.props.activePerson} />}

                <DownloadModal loading={false} familyTreeRef={this.familyTreeRef.current} show={this.state.showDownloadModal} />
            </section>
        );
    }
};