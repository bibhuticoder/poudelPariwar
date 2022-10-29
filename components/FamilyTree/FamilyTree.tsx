import React from "react"
import { FAMILY_TREE_MODE } from "../../enums"
import oldPaperImage from "../../public/images/old-paper.jpg"
import { BsCloudDownload, BsSearch } from 'react-icons/bs'
import { FamilyTreeModal } from "./FamilyTreeModal"
import { DownloadModal } from "../DownloadModal/DownloadModal"
import { Person } from "../../types"
import { transformTree, searchTree, findInTreeById } from "../../utils/family-tree.util"

type Props = {
    activePersonId: String | null
    onActivePersonRemove: Function
};

type State = {
    treeDataRaw: any
    treantData: any
    treant: any
    showDownloadModal: Boolean
    activePerson: Person | null
    searchKeyword: String | null,
    searchResults: Person[]
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
            activePerson: null,
            searchKeyword: "",
            searchResults: []
        };
        this.familyTreeRef = React.createRef()
    }

    async componentDidMount() {
        await this.fetchData(() => this.initTreant());

        if (this.props.activePersonId)
            this.setState({ activePerson: findInTreeById(this.props.activePersonId, this.state.treeDataRaw) })
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {

        if (prevProps.activePersonId != this.props.activePersonId && this.props.activePersonId && !this.state.activePerson) {
            let activePerson = findInTreeById(this.props.activePersonId, this.state.treeDataRaw);
            if (!activePerson) return;
            this.setState({ activePerson });

            let activePersonElem = document.getElementById(this.props.activePersonId + '');
            if (activePersonElem) {
                activePersonElem.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

                // disable all
                Array.from(document.querySelectorAll(".person")).forEach(person => {
                    person.children[0].classList.remove("!text-red-800");
                });

                // enable one
                activePersonElem.children[0].classList.add("!text-red-800");
            }
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
        };
    }

    handleDownloadClick = () => {
        this.setState({ showDownloadModal: true });
    }

    handleModalClose = () => {
        this.setState({ activePerson: null }, () => this.props.onActivePersonRemove());
    }

    handleSearchKeywordChange = (event: any) => {
        this.setState({ searchKeyword: event.target.value });
        let results = searchTree(this.state.searchKeyword, this.state.treeDataRaw);
        this.setState({
            searchResults: results.filter(r => r.name.length).map(r => { return { id: r.id, name: r.name } })
        });
    }

    handleSearchResultChoose = (id: String) => {
        this.setState({ searchKeyword: "", searchResults: [] });

        if (typeof window !== "undefined") {
            window.document.dispatchEvent(new CustomEvent('show-person-detail', { detail: id }));
        }
    }

    render() {

        const treeClass = () => {
            let classNames = ['rounded-md'];
            return classNames.join(' ');
        };

        return (
            <section id="chronicles" className="relative">
                <div className="mx-auto px-4">
                    <div className="toolbar flex items-center justify-end">

                        {/* search */}
                        <div className="relative flex-grow md:max-w-xs">
                            <div className="flex items-center border-2 border-gray-200 rounded px-2 py-1">
                                <span className="text-gray-300">
                                    <BsSearch />
                                </span>
                                <input type="text" value={this.state.searchKeyword as string} className="pl-2 outline-none w-full text-black" onChange={this.handleSearchKeywordChange} />
                            </div>

                            {this.state.searchResults.length > 0 &&
                                <div className="absolute bg-gray-50 rounded z-10 w-full shadow-md">
                                    <div className="flex flex-col">
                                        {this.state.searchResults.map(sr =>
                                            <div key={sr.id} onClick={() => this.handleSearchResultChoose(sr.id)} className="cursor-pointer py-2 mx-2 my-1 text-black hover:bg-gray-200 hover:font-bold">
                                                {sr.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }
                        </div>

                        {/* download */}
                        <div>
                            <button onClick={this.handleDownloadClick} className="bg-gray-200 border-2 rounded-md px-3 py-2 m-2" title="Download">
                                <BsCloudDownload />
                            </button>
                        </div>
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

                {this.state.activePerson && <FamilyTreeModal person={this.state.activePerson} onClose={this.handleModalClose} />}

                {this.state.showDownloadModal && <DownloadModal loading={false} familyTreeRef={this.familyTreeRef.current} onClose={() => this.setState({ showDownloadModal: false })} />}
            </section>
        );
    }
};