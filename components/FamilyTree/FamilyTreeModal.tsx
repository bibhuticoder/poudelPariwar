import React from "react";
import Image from 'next/image'
import { Person } from "../../types";
import oldPaperImage from "../../public/images/old-paper-piece.png"
import { Modal } from "../Modal/Modal";
import parse from "html-react-parser";

type Props = {
    person: Person
};

type State = {
    person: Person
};

export class FamilyTreeModal extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = { person: this.props.person };
    }

    render() {
        return <>
            <Modal show={true} backButton={true} >
                <div className="px-4 pt-8 pb-4 sm:p-6 sm:pb-4 text-center  text-gray-700 font-Mukta" style={{
                    backgroundImage: `url(${oldPaperImage.src})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>

                    <div className="m-8"></div>

                    {/* Profile Image */}
                    <Image
                        src={`/images/${this.props.person.id}.jpg` || ''}
                        width="120"
                        height="120"
                        alt="Picture of the author"
                        className="rounded-full object-cover"
                    />

                    {/* Name */}
                    <h1 className="text-4xl mt-4 font-semibold">
                        {this.props.person.name}
                    </h1>

                    {/* DOB - DOD */}
                    <p className="mt-2">
                        <span className="bg-gray-200 px-2 rounded-md">
                            {this.props.person.age}
                        </span>
                    </p>

                    <p className="text-xl mt-8 max-h-80 overflow-y-auto text-justify px-4 mb-4">
                        {this.props.person.bio && parse(this.props.person.bio)}
                    </p>
                </div>
            </Modal>
        </>
    }
};