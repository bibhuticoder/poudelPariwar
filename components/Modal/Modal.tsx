import React, { MouseEventHandler, } from "react";
import { BsArrowLeftCircleFill } from 'react-icons/bs';

type Props = {
    backButton: Boolean
    onClose: Function | null
    children: any
};

const Modal = ({ backButton = false, onClose = null, children = null }: Props) => {
    return <>
        {/* shadow */}
        <div className="fixed bg-gray-700 bg-opacity-75 overflow-hidden h-screen w-screen left-0 top-0 z-40" onClick={onClose as MouseEventHandler}></div>

        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-all w-full px-4 max-w-lg z-50">

            {/* background can be different eg. images.. so they are passed as prop */}
            {children}

            {/* back button */}
            {backButton ? <button className="m-4 mx-auto text-center flex items-center text-blue-500 bg-blue-50 px-4 py-2 rounded" onClick={onClose as MouseEventHandler}>
                <BsArrowLeftCircleFill className="mr-2" />
                <span> पछाडि जानुहोस् </span>
            </button> : null}
        </div>

    </>
}

export default Modal;