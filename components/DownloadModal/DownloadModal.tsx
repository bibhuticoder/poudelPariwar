import React, { useState } from "react"
import domtoimage from "dom-to-image"
import { saveAs } from 'file-saver'
import Modal from "../Modal/Modal"
import { BsCloudDownload } from 'react-icons/bs'

type Props = {
    familyTreeElemId: string
    onClose: Function | null
};

type State = {
    loading: Boolean;
};

const DownloadModal = ({ familyTreeElemId = 'family-tree', onClose = null }: Props) => {
    const [loading, setLoading] = useState(false);

    const download = () => {
        setLoading(true);
        let node = document.querySelector(`#${familyTreeElemId}`);
        if (node)
            domtoimage.toBlob(node, { width: node.scrollWidth, height: node.scrollHeight })
                .then((blob: any) => {
                    saveAs(blob, 'poudyal-pariwar-tree.png');
                    setLoading(false);
                })
                .catch((error: any) => {
                    console.error('oops, something went wrong!', error);
                    setLoading(false);
                });
        else console.log(node)
    }



    let content = loading ? <p>
        डाउनलोड गर्न तयारी गर्दै...
        <br />
        यो पूरा हुन केही मिनेट लाग्नेछ
    </p> :
        <>
            <p className="text-2xl text-center mb-4">सम्पुर्ण बंसावली डाउनलोड गर्न तलको बटनमा क्लिक गर्नुहोस्</p>
            <button className="px-4 py-2 rounded-md bg-gray-400 text-white flex items-center mx-auto" onClick={download}>
                <BsCloudDownload /> <span className="ml-2">डाउनलोड</span>
            </button>
        </>

    return <>
        <Modal backButton={true} onClose={onClose}>
            <div className="text-center text-black font-Mukta bg-white rounded-md p-4">
                {content}
            </div>
        </Modal>
    </>
}

export default DownloadModal;