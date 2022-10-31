import React, { useEffect, useState } from "react"
import oldPaperImage from "../../public/images/old-paper.jpg"
import { BsCloudDownload, BsPersonPlus } from 'react-icons/bs'
import { FaCircleNotch } from "react-icons/fa"
import FamilyTreeModal from "./FamilyTreeModal"
import DownloadModal from "../DownloadModal/DownloadModal"
import { Person } from "../../types"
import { transformTree, findInTreeById } from "../../utils/family-tree.util"
import FamilyTreeSearch from "./FamilyTreeSearch"
import axios from "axios"

declare var Treant: any
type Props = {
    activePersonId: String | null
    onActivePersonRemove: Function
}

const FamilyTree = ({ activePersonId, onActivePersonRemove }: Props) => {
    const familyTreeRef = React.createRef()
    let treant: any = null
    const [downloadModal, setDownloadModal] = useState<Boolean>(false)
    const [activePerson, setActivePerson] = useState<Person | null>(null)
    const [treeData, setTreeData] = useState<any>(null)

    const initTreant = (callback?: Function) => {
        if (Treant && treeData && !treant) {

            treant = new Treant({
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
                    node: { HTMLclass: "node" },
                },
                nodeStructure: transformTree(treeData)

            }, () => {
                if (callback) callback()

                // scroll to mid section
                if (familyTreeRef.current) {
                    let div = familyTreeRef.current as HTMLDivElement;
                    div.scrollLeft = div.scrollWidth / 2 - div.getBoundingClientRect().width / 2;
                }

                //  attach event handler
                if (typeof window !== "undefined") {
                    window.document.querySelectorAll(".person").forEach(person => {
                        person.addEventListener('click', (event) => {
                            let id = person.getAttribute("id");
                            window.document.dispatchEvent(new CustomEvent('show-person-detail', { detail: id }));
                        })
                    })
                }
            });
        };
    }

    const handleModalClose = () => {
        setActivePerson(null)
        onActivePersonRemove()
    }

    // 1. ComponentDidMount (Runs once)
    useEffect(() => {
        axios.get("family-tree-data.json").then(({ data }) => {
            setTreeData(data)
        }).catch(e => console.log(e));
    }, []);

    // 2. After tree data is fetched
    useEffect(() => {
        initTreant(() => {
            if (activePersonId) {
                let actPerson = findInTreeById(activePersonId, treeData);
                if (actPerson) setActivePerson(actPerson);
            }
        })
    }, [treeData])

    // 3. After active person is set
    useEffect(() => {
        let activePerson = findInTreeById(activePersonId, treeData);
        if (!activePerson) return;
        setActivePerson(activePerson)

        let activePersonElem = document.getElementById(activePersonId + '')
        if (activePersonElem) {
            activePersonElem.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })

            // disable all
            Array.from(document.querySelectorAll(".person")).forEach(person => {
                person.children[0].classList.remove("!text-red-800")
            })

            // enable one
            activePersonElem.children[0].classList.add("!text-red-800")
        }
    }, [activePersonId])

    const treeClass = () => {
        let classNames = ['rounded-md'];
        return classNames.join(' ');
    };

    return <section id="chronicles" className="rounded-md bg-center bg-no-repeat bg-cover" style={{
        backgroundImage: `url(${oldPaperImage.src})`
    }}>

        <div className="container relative hidden md:block">
            <div className="absolute transform -translate-y-full top-0 right-0 w-full bg-contain bg-no-repeat bg-right-top" style={{
                backgroundImage: 'url(/images/tree-with-hands.png)',
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
                    <FamilyTreeSearch treeData={treeData} />

                    {/* Add entry */}
                    <a href="https://forms.gle/wekzeMbY77AZdQR56" target="_blank"  className="bg-gray-200 border-2 rounded-md px-3 py-2 mx-2">
                        <BsPersonPlus />
                    </a>

                    <button onClick={() => setDownloadModal(true)} className="bg-gray-200 border-2 rounded-md px-3 py-2" title="Download">
                        <BsCloudDownload />
                    </button>
                </div>
            </div>

            <div className="relative overflow-x-auto">
                <div id="family-tree" ref={familyTreeRef as React.RefObject<HTMLDivElement>} className={treeClass()} >
                    <FaCircleNotch className="text-5xl my-16 mx-auto text-gray-500 animate-spin" />
                </div>
            </div>

        </div>

        {activePerson && <FamilyTreeModal person={activePerson} onClose={handleModalClose} />}

        {downloadModal && <DownloadModal familyTreeRef={familyTreeRef.current} onClose={() => setDownloadModal(false)} />}
    </section>
}

export default FamilyTree