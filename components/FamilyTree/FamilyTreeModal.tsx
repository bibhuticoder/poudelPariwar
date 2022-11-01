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

type Props = {
    person: Person,
    onClose: Function
};

const FamilyTreeModal = ({ person, onClose }: Props) => {

    const [imgFlag, setImgFLag] = useState<Boolean>(true)
    const [profileCompleteFlag, setProfileCompleteFlag] = useState<Boolean>(false)

    useEffect(() => {
        if (person.dob && person.bio && person.bio.length) setProfileCompleteFlag(true)
    }, [])


    return <>
        <Modal backButton={true} onClose={onClose} >
            <div className="px-4 pt-8 pb-4 sm:p-6 sm:pb-4 text-center text-black font-Mukta" style={{
                backgroundImage: `url(${oldPaperImage.src})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

                <div className="m-8"></div>

                {/* Profile Image */}
                {imgFlag &&
                    <Image
                        src={`/images/${person.id}.jpg` || ''}
                        width="120"
                        height="120"
                        alt="फेला परेन"
                        className="rounded-full object-cover"
                        onError={() => setImgFLag(false)}
                    />
                }

                {/* Name */}
                <h1 className="text-4xl mt-4 font-semibold">
                    {person.name}
                </h1>

                {/* DOB - DOD */}
                {person.age &&
                    <p className="mt-2">

                        {person.dod ? (
                            <>
                                <span className="bg-gray-200 px-2 rounded-md mr-2">
                                    {person.age.lifespan}
                                </span>

                                <span className="bg-gray-200 px-2 rounded-md">
                                    {person.age.age}
                                </span>
                            </>
                        ) : (
                            <span className="bg-gray-200 px-2 rounded-md">
                                {person.age}
                            </span>
                        )}
                    </p>
                }

                {/* Bio */}
                <p className="text-xl mt-8 max-h-80 overflow-y-auto text-left px-4 mb-4">
                    {person.bio && parse(person.bio)}
                </p>

                {/* complete profile notice */}
                {!profileCompleteFlag ? <>
                    <p className="my-4 text-xl">
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