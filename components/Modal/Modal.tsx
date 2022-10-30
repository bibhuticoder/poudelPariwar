import React, { MouseEventHandler } from "react";
import { BsArrowLeftCircleFill } from 'react-icons/bs';

type Props = {
    backButton: Boolean
    onClose: Function
    children: any
};

export class Modal extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    render() {
        let backButton;
        if (this.props.backButton) {
            backButton =
                <button className="m-4 mx-auto text-center flex items-center text-blue-500 bg-blue-50 px-4 py-2 rounded" onClick={this.props.onClose as MouseEventHandler}>
                    <BsArrowLeftCircleFill className="mr-2" />
                    <span> पछाडि जानुहोस् </span>
                </button>
        }

        return <>
            <div className="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                {/* shadow */}
                <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity overflow-hidden" onClick={() => console.log("hehe")}></div>

                <div className="fixed  inset-0 z-20 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            {this.props.children}
                            {backButton}
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
};