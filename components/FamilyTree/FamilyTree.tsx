import React from "react"
import domtoimage from "dom-to-image"
import { saveAs } from 'file-saver'
import { FAMILY_TREE_DATA } from "./data"
import { FAMILY_TREE_MODE } from "../../enums"
import oldPaperImage from "../../public/images/old-paper.jpg"
import { BsCloudDownload } from 'react-icons/bs'
import { FamilyTreeModal } from "./FamilyTreeModal"

type Props = {
    mode: FAMILY_TREE_MODE;
};

type State = {
    treant: any;
    mode: FAMILY_TREE_MODE
};

declare var Treant: any;

export class FamilyTree extends React.Component<Props, State> {

    private familyTreeRef;
    constructor(props: any) {
        super(props);
        this.state = { treant: null, mode: this.props.mode };
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
        }
    }

    handleModeChange = (event: any) => {
        this.setState({ mode: event.target.value });
        if (this.familyTreeRef.current) {
            this.setState({ treant: null });
            (this.familyTreeRef.current as HTMLElement).innerHTML = "";
            setTimeout(() => this.initTreant(), 500);
        }
    }

    download = () => {
        let node = this.familyTreeRef.current as any;
        domtoimage.toBlob(node, { width: node.scrollWidth, height: node.scrollHeight })
            .then(function (blob: any) {
                saveAs(blob, 'poudyal-pariwar-tree.png');
            })
            .catch(function (error: any) {
                console.error('oops, something went wrong!', error);
            });
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

                        <button onClick={this.download} className="bg-gray-200 rounded-md px-3 py-2 m-2" title="Download">
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

                <FamilyTreeModal
                    show={false}
                    person={{
                        id: 'bibhuti-poudyal',
                        name: 'विभूति पौडेल',
                        image: 'nepali-0.png'
                    }} />
            </section>
        );
    }
};