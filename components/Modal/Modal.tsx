import React from "react";
import oldPaperImage from "../../public/images/old-paper-piece.png"
import { BsArrowLeftCircleFill } from 'react-icons/bs';

type Props = {
    show: Boolean,
    backButton: Boolean,
    children: any
};

type State = {
    show: Boolean
};

export class Modal extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = { show: this.props.show };
    }

    UNSAFE_componentWillReceiveProps(nextProps: Props) {
        if (nextProps.show !== this.state.show) {
            this.setState({ show: nextProps.show });
        }
    }

    setModalVisibility = (value: Boolean) => {
        this.setState({ show: value });
    }

    render() {
        let backButton;
        if (this.props.backButton) {
            backButton =
                <button className="m-4 mx-auto text-center font-bold flex items-center" onClick={() => this.setModalVisibility(false)}>
                    <BsArrowLeftCircleFill className="mr-2" />
                    <span> पछाडि जानुहोस् </span>
                </button>
        }

        if (this.state.show) {
            return (
                <>
                    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                        {/* shadow */}
                        <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity overflow-hidden" onClick={() => console.log("hehe")}></div>

                        <div className="fixed  inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">

                                <div className="relative transform overflow-hidden transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    {this.props.children}
                                    {backButton}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
};