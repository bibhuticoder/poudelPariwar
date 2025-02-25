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
import { npDigit } from "../../utils/index.utils"
import { treeChartConfig } from "./FamilyTree.helper"
import Draggable from "./Draggable"

declare var Treant: any
type Props = {
    activePersonId: String | null
    onActivePersonRemove: Function
}

const FamilyTree = ({ activePersonId, onActivePersonRemove }: Props) => {
    let treant: any = null
    const [downloadModal, setDownloadModal] = useState<Boolean>(false)
    const [activePerson, setActivePerson] = useState<Person | null>(null)
    const [treeData, setTreeData] = useState<any>(null)

    const initTreant = (callback?: Function) => {
        if (Treant && treeData && !treant) {

            treant = new Treant({
                chart: treeChartConfig,
                nodeStructure: transformTree(treeData)

            }, () => {
                if (callback) callback()

                let familyTreeElem = document.querySelector("#family-tree")

                // scroll to mid section
                if (familyTreeElem) {
                    familyTreeElem.scrollLeft = familyTreeElem.scrollWidth / 2 - familyTreeElem.getBoundingClientRect().width / 2
                }

                //  attach event handlers
                if (typeof window !== "undefined") {
                    // click on individual person
                    window.document.querySelectorAll(".person").forEach(person => {
                        person.addEventListener('click', (event) => {
                            let id = person.getAttribute("id");
                            window.document.dispatchEvent(new CustomEvent('show-person-detail', { detail: id }));
                        })
                    })
                }
            });
        }
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
            <div className="absolute transform -translate-y-full top-0 right-0 w-full bg-contain bg-no-repeat bg-right-top -z-10" style={{
                backgroundImage: 'url(/images/tree-with-hands.png)',
                height: '35rem'
            }} />
        </div>

        <div className="mx-auto">
            <div className="toolbar px-4 flex flex-wrap items-center justify-between">

                {/* info  */}
                <div className="text-black bg-gray-100 text-center md:text-left rounded p-2 flex-grow mx-1 md:flex-grow-0 md:mb-0 mt-2">
                    बंशावाली: वि.सं &nbsp;
                    {npDigit('1800')}
                    &nbsp;
                    देखी आजसम्म
                </div>

                <div className="flex justify-end items-center mt-2 flex-grow">

                    {/* search */}
                    <FamilyTreeSearch treeData={treeData} />

                    {/* Add entry */}
                    <a href="https://forms.gle/wekzeMbY77AZdQR56" target="_blank" rel="noreferrer" className="bg-gray-100 border-2 rounded-md px-3 py-2 mx-2">
                        <BsPersonPlus />
                    </a>

                    <button onClick={() => setDownloadModal(true)} className="bg-gray-100 border-2 rounded-md px-3 py-2" title="Download">
                        <BsCloudDownload />
                    </button>
                </div>
            </div>

            <div className="relative overflow-x-auto cursor-grab">
                <Draggable id="family-tree" customClass={treeClass()} >
                    <FaCircleNotch className="text-5xl my-16 mx-auto text-gray-500 animate-spin" />
                </Draggable>
            </div>
        </div>

        {activePerson && <FamilyTreeModal person={activePerson} onClose={handleModalClose} />}

        {downloadModal && <DownloadModal familyTreeElemId="family-tree" onClose={() => setDownloadModal(false)} />}
    </section>
}

export default FamilyTree