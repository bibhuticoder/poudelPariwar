import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { Person } from "../../types";
import oldPaperImage from "../../public/images/old-paper-piece.png"
import Modal from "../Modal/Modal";
import parse from "html-react-parser";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
} from "next-share";
import { npDigit } from "../../utils/index.utils";


type Props = {
    person: Person,
    onClose: Function
};

const FamilyTreeModal = ({ person, onClose }: Props) => {

    const [imgFlag, setImgFLag] = useState<Boolean>(false)
    const [profileCompleteFlag, setProfileCompleteFlag] = useState<Boolean>(false)

    useEffect(() => {
        if (person && person.dob && person.bio && person.bio.length) setProfileCompleteFlag(true)
    }, [])

    return <>
        <Modal backButton={true} onClose={onClose} >
            <div className="px-4 pt-4 pb-4 text-center text-black font-Mukta" style={{
                backgroundImage: `url(${oldPaperImage.src})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

                <div className="m-8"></div>

                {/* Profile Image */}
                <Image
                    src={`/images/${person.id}.jpg` || ''}
                    width={imgFlag ? 120 : 0}
                    height={imgFlag ? 120 : 0}
                    alt="फेला परेन"
                    className="rounded-full object-cover"
                    onLoadingComplete={() => setImgFLag(true)}
                    onError={() => { }}
                />

                {/* Name */}
                <h1 className="text-3xl md:text-4xl mt-4 font-semibold">
                    {person.name}
                </h1>

                {/* DOB - DOD AGE */}
                {person.age &&
                    <p className="mt-2">
                        <>
                            {person.dob ?
                                <span className="bg-gray-200 px-2 rounded-md mr-2">
                                    {npDigit(person.dob)}
                                </span>
                                : null}

                            {person.dod ?
                                <span className="bg-gray-200 px-2 rounded-md mr-2">
                                    {npDigit(person.dod)}
                                </span>
                                : null}

                            {person.age ?
                                <span className="bg-gray-200 px-2 rounded-md">
                                    {npDigit(person.age.toString())}&nbsp;वर्ष
                                </span>
                                : null}
                        </>
                    </p>
                }

                {/* Bio */}
                <p className="text-lg md:text-xl mt-8 max-h-64 md:max-h-80 overflow-y-auto text-left px-2 md:px-4 mb-4">
                    {person.bio && parse(person.bio)}
                </p>

                {/* complete profile notice */}
                {!profileCompleteFlag ? <>
                    <p className="my-4 text-lg md:text-xl">
                        कृपया &nbsp;
                        <a href="https://forms.gle/wekzeMbY77AZdQR56" target="_blank" rel="noreferrer" className='site-link'>
                            फारम भर्नुहोस्
                        </a>&nbsp; र आफ्नो जानकारी पूरा गर्नुहोस् ।
                    </p>
                </> : null}

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
};

export default FamilyTreeModal;