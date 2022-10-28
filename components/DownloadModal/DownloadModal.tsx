import React from "react"
import domtoimage from "dom-to-image"
import { saveAs } from 'file-saver'
import { Modal } from "../Modal/Modal"
import { BsCloudDownload } from 'react-icons/bs'

type Props = {
    loading: Boolean
    familyTreeRef: any
    onClose: Function
};

type State = {
    loading: Boolean;
};

export class DownloadModal extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = { loading: this.props.loading };
    }

    download = () => {
        this.setState({ loading: true });
        let node = this.props.familyTreeRef as any;
        domtoimage.toBlob(node, { width: node.scrollWidth, height: node.scrollHeight })
            .then((blob: any) => {
                saveAs(blob, 'poudyal-pariwar-tree.png');
                this.setState({ loading: false });
            })
            .catch((error: any) => {
                console.error('oops, something went wrong!', error);
                this.setState({ loading: false });
            });
    }

    render() {

        let content =
            <>
                <p className="text-2xl text-center mb-4">सम्पुर्ण बंसावली डाउनलोड गर्न तलको बटनमा क्लिक गर्नुहोस्</p>
                <button className="px-4 py-2 rounded-md bg-gray-400 text-white flex items-center mx-auto" onClick={this.download}>
                    <BsCloudDownload /> <span className="ml-2">डाउनलोड</span>
                </button>
            </>
        if (this.state.loading) {
            content = <p>
                डाउनलोड गर्न तयारी गर्दै...
                <br />
                यो पूरा हुन केही मिनेट लाग्नेछ
            </p>
        }


        return <>
            <Modal backButton={true} onClose={() => this.props.onClose()}>
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center bg-white rounded-md text-gray-700 font-Mukta">
                    {content}
                </div>
            </Modal>
        </>
    }
};