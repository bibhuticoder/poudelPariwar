import WoodTexture from "../../public/images/wood.jpg"
import WoodTextureFlip from "../../public/images/wood-flip.jpg"
import OldPaper from "../../public/images/old-paper-piece.png"

type TimelineEvent = {
    date: String
    event: String
}

type Props = {
    eventItem: TimelineEvent,
    align: Boolean
}

const TimelineUnit = ({ eventItem, align }: Props) => {

    const event = <div className={`h-auto w-72 bg-cover bg-center px-8 text-justify py-4 text-gray-600 text-md transform ${align ? '' : '-'}translate-x-full`} style={{
        backgroundImage: `url(${OldPaper.src})`
    }}>
        {eventItem.event}
    </div>

    const rod = <div className={`h-2 w-96 ${align ? 'rounded-l' : 'rounded-r'} bg-repeat bg-fill shadow`} style={{
        backgroundImage: `url(${WoodTexture.src})`
    }} />

    const date = <div className="w-36 h-20 rounded-xl p-2 font-bold transformtranslate-x-44 my-4" style={{
        backgroundImage: `url(${WoodTexture.src})`
    }}>
        <div className="bg-white text-stone-500 w-full h-full text-xl rounded-xl grid place-items-center">
            {eventItem.date}
        </div>
    </div>

    return align
        ? <> <div className="flex items-center my-8 transform translate-x-20"> {event} {rod} {date} </div> </>
        : <> <div className="flex items-center my-8 transform -translate-x-20 translate-y-full "> {date} {rod} {event} </div> </>
}

const Timeline = () => {

    const events: TimelineEvent[] = [
        {
            date: "इ. पू. १५०",
            event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        },

        {
            date: "इ. पू. १५०",
            event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        },
        // {
        //     date: "इ. पू. १५०",
        //     event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        // },

        // {
        //     date: "इ. पू. १५०",
        //     event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        // },
        // {
        //     date: "इ. पू. १५०",
        //     event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        // },

        // {
        //     date: "इ. पू. १५०",
        //     event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        // },
        // {
        //     date: "इ. पू. १५०",
        //     event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        // },

        // {
        //     date: "इ. पू. १५०",
        //     event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        // }
    ]

    const left = events.filter((e, i) => i % 2 == 0)
    const right = events.filter((e, i) => i % 2 !== 0)

    return <>
        <div className="flex flex-nowrap justify-center">

            {/* left */}
            <div className="flex flex-col">
                {left.map((eventItem, i) => <TimelineUnit align={true} eventItem={eventItem} key={i} />)}
            </div>

            {/* rod */}
            <div className="w-3 bg-repeat bg-fill rounded-xl shadow py-40" style={{
                backgroundImage: `url(${WoodTextureFlip.src})`
            }}
            />

            {/* right */}
            <div className="flex flex-col">
                {right.map((eventItem, i) => <TimelineUnit align={false} eventItem={eventItem} key={i} />)}
            </div>
        </div>
    </>
}

export default Timeline;