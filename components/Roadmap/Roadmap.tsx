import { BsCheck2Circle, BsCircle } from "react-icons/bs"

const RoadMap = () => {

    const steps = [
        {
            title: 'Initial launch',
            desc: 'Prepare basic working application. Deploy it to a sub-domain. Build a form for data collection.',
            done: true
        },

        {
            title: 'Data collection',
            desc: 'Collect data for Family-Tree.',
            done: false
        },

        {
            title: 'Family history',
            desc: 'Gather family history and develop a separate page for it.',
            done: false
        },

        {
            title: 'Wrap Up (finalize stage 1)',
            desc: "Finalize existing stuffs. Prepare for stage 2."
        }
    ]


    return <>
        <div className="font-Nunito">
            {steps.map((step, index) => {
                return <div className={'flex flex-col mb-8 ' + (step.done ? 'text-gray-500' : 'text-gray-800')} key={index}>
                    <p className="text-xl flex items-center font-bold">
                        {step.done ? <BsCheck2Circle /> : <BsCircle />}
                        <span className="ml-2"> {step.title}</span>
                    </p>
                    <p className="text-lg pl-7">{step.desc}</p>
                </div>
            })}
        </div>
    </>
}

export default RoadMap;