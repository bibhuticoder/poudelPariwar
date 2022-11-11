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

    const date = <div className="hidden w-36 h-20 rounded-xl p-2 font-bold my-4 md:block" style={{
        backgroundImage: `url(${WoodTexture.src})`
    }}>
        <div className="bg-white text-stone-500 w-full h-full text-xl rounded-xl grid place-items-center">
            {eventItem.date}
        </div>
    </div>

    const event = <div className={`
        h-auto 
        w-72 
        bg-cover 
        bg-center 
        px-8 
        text-justify 
        py-4 
        text-gray-600 
        text-lg
        md:absolute 
        md:left-1/2 
        md:top-1/2 
        md:transform 
        md:-translate-x-1/2 
        md:-translate-y-1/2
    `}
        style={{
            backgroundImage: `url(${OldPaper.src})`
        }}>
        {/* in mobile show date inside event */}
        <h2 className="inline-block w-full md:hidden text-xl font-bold text-center underline mb-4">
            {eventItem.date}
        </h2>

        <p> {eventItem.event} </p>
    </div>


    // hide on mobile
    const rod = <div className={`hidden relative h-2 w-80 ${align ? 'rounded-l' : 'rounded-r'} bg-repeat bg-fill md:block`} style={{
        backgroundImage: `url(${WoodTexture.src})`
    }}>
        {event}
    </div>

    return align
        ? <> <div className="flex items-center md:self-start self-center md:my-16 my-6"> {rod} {date} <div className="block md:hidden">{event}</div> </div> </>
        : <> <div className="flex items-center md:self-end self-center md:my-16 my-6"> {date} {rod} <div className="block md:hidden">{event}</div> </div> </>
}

const Timeline = () => {

    const events: TimelineEvent[] = [
        {
            date: "इ. पू. १५०",
            event: "पौडेलहरु बाहुन, क्षेत्रीका अतिरिक्त अनेक जात र वर्गमा विभाजित छन् । तर पनि पौडेलहरुको एउटै गोत्र आत्रेय र प्रवर पनि आत्रेय, अर्चनाना, श्यावाश्व त्रिप्रवर नै हो ।"
        },

        {
            date: "इ. पू. १५०",
            event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        },
        {
            date: "इ. पू. १५०",
            event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        },

        {
            date: "इ. पू. १५०",
            event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        },
        {
            date: "इ. पू. १५०",
            event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        },

        {
            date: "इ. पू. १५०",
            event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        },
        {
            date: "इ. पू. १५०",
            event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        },

        {
            date: "इ. पू. १५०",
            event: "पौडी गढवालबाट आएका हुनाले यिनको वंश - पौडी+ आलय ) पौडयालय कहलिन थाल्यो । कालान्तरमा पौडयालयबाट पौडयाल र पौडेल थरको विकास भएको पाइन्छ ।"
        }
    ]

    return <>
        {/* 20(rod) + 9(date) + 20(rod) = 49 */}
        <div className="relative w-full md:w-[49rem] md:mx-auto">

            {/* events */}
            <div className="flex flex-col">
                {events.map((eventItem, i) => <TimelineUnit align={(i + 1) % 2 == 0} eventItem={eventItem} key={i} />)}
            </div>

            {/* rod */}
            <div className="w-3 h-full -z-10 bg-repeat bg-fill rounded-xl shadow py-40 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{
                backgroundImage: `url(${WoodTextureFlip.src})`
            }} />
        </div>
    </>
}

export default Timeline;