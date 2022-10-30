import React from "react"
import oldPaperImage from "../../public/images/old-paper.jpg"
import { BsCloudDownload, BsPersonPlus, BsSearch } from 'react-icons/bs'
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

            setTimeout(() => {
                if (this.familyTreeRef.current) {
                    let div = this.familyTreeRef.current as HTMLDivElement;
                    div.scrollLeft = div.scrollWidth / 2 - div.getBoundingClientRect().width / 2;
                }
            }, 500);

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
        this.setState({ searchKeyword: (event.target.value as String).toLowerCase() });
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
            <section id="chronicles" className="rounded-md" style={{
                backgroundImage: `url(${oldPaperImage.src})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

                <div className="container relative hidden md:block">
                    <div className="absolute transform -translate-y-full top-0 right-0 w-full bg-contain bg-no-repeat bg-right-top" style={{
                        backgroundImage: 'url(/images/plant2.png)',
                        height: '35rem'
                    }} />
                </div>


                <div className="mx-auto px-4">
                    <div className="toolbar flex flex-wrap items-center justify-between pt-2">

                        {/* info  */}
                        <div className="text-black bg-gray-200 rounded p-2 flex-grow mb-2 md:flex-grow-0 md:mb-0">
                            बंशावाली: वि.सं
                            xxxx &nbsp;
                            {/* {npDigit('1823')} */}
                            देखी आजसम्म
                        </div>

                        <div className="flex items-center">

                            {/* search */}
                            <div className="relative flex-grow md:max-w-xs">
                                <div className="flex items-center border-2 border-gray-200 rounded px-2 py-1 bg-gray-200">
                                    <span className="text-black">
                                        <BsSearch />
                                    </span>
                                    <input type="text" value={this.state.searchKeyword as string} className="pl-2 outline-none w-full text-black bg-gray-200" onChange={this.handleSearchKeywordChange} />
                                </div>

                                {this.state.searchResults.length > 0 &&
                                    <div className="absolute bg-gray-50 rounded z-10 w-full shadow-md">
                                        <div className="flex flex-col">
                                            {this.state.searchResults.map(sr =>
                                                <div key={sr.id} onClick={() => this.handleSearchResultChoose(sr.id)} className="cursor-pointer py-2 mx-2 my-1 text-black hover:text-gray-900">
                                                    {sr.name}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Add entry */}
                            <a href="https://forms.gle/wekzeMbY77AZdQR56" target="_blank" rel="noopener noreferrer" className="bg-gray-200 border-2 rounded-md px-3 py-2 mx-2">
                                <BsPersonPlus />
                            </a>

                            <button onClick={this.handleDownloadClick} className="bg-gray-200 border-2 rounded-md px-3 py-2" title="Download">
                                <BsCloudDownload />
                            </button>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto">
                        <div id="family-tree" ref={this.familyTreeRef as React.RefObject<HTMLDivElement>} className={treeClass()} >
                            <p className="text-center text-5xl my-8 text-gray-600">
                                <BsCloudDownload className="inline mr-4 animate-bounce" />
                                लोड गर्दै...
                            </p>
                        </div>
                    </div>

                </div>

                {this.state.activePerson && <FamilyTreeModal person={this.state.activePerson} onClose={this.handleModalClose} />}

                {this.state.showDownloadModal && <DownloadModal loading={false} familyTreeRef={this.familyTreeRef.current} onClose={() => this.setState({ showDownloadModal: false })} />}
            </section>
        );
    }
};