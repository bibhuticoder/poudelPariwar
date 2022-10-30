import { MouseEventHandler } from "react";
import { BsFillXCircleFill } from "react-icons/bs"

type Props = {
    onCancel: MouseEventHandler
};

const FormNotice = (props: Props) => {
    return <>
        <div className="w-full bg-blue-400">
            <div className="container text-white p-2 z-10 text-md md:text-xl flex justify-between items-center">
                <p>
                    कृपया बंशावालीमा <span className="hidden md:inline">आफ्नो वा परिवारको</span>  जानकारी अपडेट गर्न
                    <a href="https://forms.gle/wekzeMbY77AZdQR56" target="_blank" rel="noopener noreferrer" className='ml-2 border-b-2 text-white text-md inline animate-pulse'>
                        फारम भर्नुहोस्
                    </a>
                </p>

                <BsFillXCircleFill className="rounded-full text-2xl cursor-pointer" onClick={props.onCancel} />

            </div>
        </div>
    </>
}

export default FormNotice;