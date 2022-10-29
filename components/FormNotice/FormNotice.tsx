import { BsJournalText } from "react-icons/bs"

const FormNotice = () => {
    return <>
        <div className="fixed bottom-0 w-full bg-red-400 text-white p-2 text-center z-10 flex items-center justify-center">
            <p className="text-xl mr-2">
                कृपया आफ्नो जानकारी अपडेट गर्न
            </p>
            <a href="https://forms.gle/wekzeMbY77AZdQR56" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-white text-black rounded p-2'>
                <span> फारम भर्नुहोस् </span>
            </a>
        </div>
    </>
}

export default FormNotice;