import { BsJournalText } from "react-icons/bs"

const FormNotice = () => {
    return <>
        <div className="sticky bottom-2 rounded bg-red-400 opacity-80 text-white p-4 w-80 mx-auto text-center z-10">
            <p className="text-xl mb-2">
                कृपया आफ्नो जानकारी अपडेट गर्न
            </p>
            <a href="https://forms.gle/wekzeMbY77AZdQR56" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-white text-black rounded px-4 py-2'>
                <BsJournalText />
                <span className='ml-2'> फारम भर्नुहोस् </span>
            </a>
        </div>
    </>
}

export default FormNotice;