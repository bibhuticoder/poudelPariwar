import React, { useEffect } from "react"
import { useState } from "react"
import oldPaperImage from "../../public/images/old-paper.jpg"

type DragPos = {
    left: number

    x: number

}

type Props = {
    id: string
    customClass: string
    children: any
}

const Draggable = ({ id = '', customClass = '', children = null }: Props) => {
    const [dragPos, setDragPos] = useState<DragPos>({ left: 0, x: 0 })
    const [treeElem, setTreeElem] = useState<HTMLDivElement | null>(null)

    const mouseUpHandler = () => {
        if (treeElem) {
            treeElem.removeEventListener('mousemove', mouseMoveHandler)
            treeElem.removeEventListener('mouseup', mouseUpHandler)
            treeElem.removeEventListener('mouseleave', mouseUpHandler)

            treeElem.style.cursor = 'grab';
            treeElem.style.removeProperty('user-select');
        }
    }

    const mouseMoveHandler = (e: MouseEvent) => {
        if (treeElem) {
            let rect = treeElem.getBoundingClientRect()
            const dx = e.clientX - rect.x - dragPos.x
            treeElem.scrollLeft = dragPos.left - dx
        }
    }

    const mouseDownHandler = (e: MouseEvent) => {
        if (treeElem) {
            let rect = treeElem.getBoundingClientRect()
            setDragPos({
                left: treeElem.scrollLeft,
                x: e.clientX - rect.x
            })
        }
    }

    useEffect(() => {
        if (treeElem)
            treeElem.addEventListener('mousedown', mouseDownHandler)
    }, [treeElem])

    useEffect(() => {
        if (window.ontouchstart == undefined) {
            setTreeElem(document.querySelector(`#${id}`) as HTMLDivElement)
        }
    }, [])

    useEffect(() => {
        // change css to have dragging effect
        if (treeElem) {
            treeElem.style.cursor = 'grabbing'
            treeElem.style.userSelect = 'none'

            treeElem.addEventListener('mousemove', mouseMoveHandler)
            treeElem.addEventListener('mouseup', mouseUpHandler)
            treeElem.addEventListener("mouseleave", mouseUpHandler)
        }
    }, [dragPos])

    return <div id={id} className={`${customClass}`}>
        {children}
    </div>
}

export default Draggable