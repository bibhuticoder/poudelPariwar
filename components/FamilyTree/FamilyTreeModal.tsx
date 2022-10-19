import React from "react";
import Image from 'next/image'
// import domtoimage from "dom-to-image";
// import { saveAs } from 'file-saver';
// import { FAMILY_TREE_DATA } from "./data";
import { Person } from "../../types";
import oldPaperImage from "../../public/images/old-paper-piece.png"
import { BsArrowLeftCircleFill } from 'react-icons/bs';

type Props = {
    show: Boolean
    person: Person;
};

type State = {
    show: Boolean
    person: Person;
    // mode: FAMILY_TREE_MODE
};


export class FamilyTreeModal extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = { person: this.props.person, show: this.props.show };
    }

    // componentDidMount() {
    //     this.initTreant();
    // }

    // componentWillUnmount(): void {
    //     this.setState({ treant: null });
    // }

    // handleModeChange = (event: any) => {
    //     this.setState({ mode: event.target.value });
    //     if (this.familyTreeRef.current) {
    //         this.setState({ treant: null });
    //         (this.familyTreeRef.current as HTMLElement).innerHTML = "";
    //         setTimeout(() => this.initTreant(), 500);
    //     }
    // }

    setModalVisibility = (value: Boolean) => {
        this.setState({ show: value });
    }


    render() {
        if (this.state.show) return (
            <>
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    {/* shadow */}
                    <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed  inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">

                            <div className="relative transform overflow-hidden transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center  text-gray-700 font-Mukta" style={{
                                    backgroundImage: `url(${oldPaperImage.src})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}>


                                    {/* Profile Image */}
                                    <Image
                                        src={('/images/' + this.props.person.image) || ''}
                                        width="120"
                                        height="120"
                                        alt="Picture of the author"
                                        className="rounded-full"
                                    />

                                    {/* Name */}
                                    <h1 className="text-4xl mt-4 font-semibold">
                                        {this.props.person.name}
                                    </h1>

                                    {/* DOB - DOD */}
                                    <p className="mt-2">
                                        <span className="bg-gray-200 px-2 rounded-md">
                                            २०५३/०४/२२ (२६ वर्ष)
                                        </span>
                                    </p>

                                    <p className="text-xl mt-8 max-h-80 overflow-y-auto text-justify px-4 mb-4">
                                        त्यसअघि नै डा. युवराज खतिवडा अर्थमन्त्री हुँदा नेपाल पुनर्बिमा कम्पनीलाई व्यवसाय सुनिश्चित गर्न भन्दै बीमकले आफूले आर्जन गरेको बीमा व्यवसायको २० प्रतिशत प्रत्यक्ष हिस्सा नेपाल पुनर्बीमा कम्पनीमा अनिवार्य रुपमा पुनर्बीमा गर्नुपर्ने व्यवस्था गरेका थिए ।
                                        <br />
                                        <br />
                                        बीमा समितिले मंसिर ०७८ मा बीमकले आफूले आर्जन गरेको बीमा व्यवसायको २० प्रतिशत प्रत्यक्ष हिस्सा नेपाल पुनर्बीमा कम्पनीमा गर्नुपर्ने व्यवस्था कायम राख्दै त्यसबाहेक बाँकी हुन आउने सबै पुनर्बीमा व्यवसाय स्वदेशी पुनर्बीमकहरूलाई प्रदान गर्न दिएको निर्देशन बीमाको सिद्धान्तविपरीत भएको भन्दै बीमकले आलोचना गर्दै आएको छ ।
                                        <br />
                                        <br />
                                        बीमा समितिले २९ भदौ २०७९ मा जारी गरेको बीमकको पुनर्बीमा निर्देशिका २०७८ को बीमकले पुनर्बिमा गराउँँदा पर्याप्त जोखिम विविधिकरण हुनेगरी पुुनर्बिमा विविधीकरणको व्यवस्था गनुुपर्ने उल्लेख गरेको थियो ।  उक्त व्यवस्थालाई मंसिर २०७८ मै बीमा समितिले उलंघन गर्दै निर्देशन जारी जारी गर्‍यो ।
                                        <br />
                                        <br />
                                        अब बीमा ऐनमा नै बीमा समितिले तोकेको निश्चित प्रतिशत हिस्सा स्वदेशी पुनर्बीमा कम्पनीलाई दिनुपर्ने व्यवस्था गरिएपछि बीमकको पुनर्बिमा निर्देशिका-२०७८ नै स्वतः खारेज भएको छ  ।
                                    </p>

                                    <button className="m-4 mx-auto text-center font-bold flex items-center" onClick={() => this.setModalVisibility(false)}>
                                        <BsArrowLeftCircleFill className="mr-2" />
                                        <span> पछाडि जानुहोस् </span>
                                    </button>


                                    {/* <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Deactivate</button>
                                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};