import React from "react";
import Image from 'next/image'
import { Person } from "../../types";
import oldPaperImage from "../../public/images/old-paper-piece.png"
import { Modal } from "../Modal/Modal";
import parse from "html-react-parser";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
} from "next-share";

type Props = {
    person: Person,
    onClose: Function
};

type State = {
    person: Person,
    showImage: Boolean
};

export class FamilyTreeModal extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = { person: this.props.person, showImage: true };
    }

    handleShare = () => {
        console.log(location.href);
    }

    render() {
        return <>
            <Modal backButton={true} onClose={this.props.onClose} >
                <div className="px-4 pt-8 pb-4 sm:p-6 sm:pb-4 text-center  text-gray-700 font-Mukta" style={{
                    backgroundImage: `url(${oldPaperImage.src})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>

                    <div className="m-8"></div>

                    {/* Profile Image */}
                    {this.state.showImage &&
                        <Image
                            src={`/images/${this.props.person.id}.jpg` || ''}
                            width="120"
                            height="120"
                            alt="फेला परेन"
                            className="rounded-full object-cover"
                            onError={() => { this.setState({ showImage: false }) }}
                        />
                    }

                    {/* Name */}
                    <h1 className="text-4xl mt-4 font-semibold">
                        {this.props.person.name}
                    </h1>

                    {/* DOB - DOD */}
                    {this.props.person.age &&
                        <p className="mt-2">

                            {this.props.person.dod ? (
                                <>
                                    <span className="bg-gray-200 px-2 rounded-md mr-2">
                                        {this.props.person.age.lifespan}
                                    </span>

                                    <span className="bg-gray-200 px-2 rounded-md">
                                        {this.props.person.age.age}
                                    </span>
                                </>
                            ) : (
                                <span className="bg-gray-200 px-2 rounded-md">
                                    {this.props.person.age}
                                </span>
                            )}
                        </p>
                    }

                    {/* Bio */}
                    <p className="text-xl mt-8 max-h-80 overflow-y-auto text-justify px-4 mb-4">
                        {this.props.person.bio && parse(this.props.person.bio)}
                    </p>

                    {/* Share */}
                    <div className="flex justify-center">

                        <FacebookShareButton
                            url={location.href}
                            hashtag={'#bibhuti.me'}
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <div className="m-2"></div>
                        <TwitterShareButton
                            url={location.href}
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                    </div>
                </div>
            </Modal>
        </>
    }
};