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

    const date = <div className="hidden shadow-md shadow-black w-28 h-16 text-center rounded-xl p-1.5 font-bold my-4 md:block break-words z-10" style={{
        backgroundImage: `url(${WoodTexture.src})`
    }}>
        <div className="bg-white text-stone-500 w-full h-full text-lg rounded-xl grid place-items-center">
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
    const rod = <div className={`hidden relative h-2 w-80 ${align ? 'rounded-l' : 'rounded-r'} bg-repeat bg-fill shadow-md shadow-black md:block`} style={{
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
            date: "",
            event: "जगतको सृष्टिकर्ता ब्रह्मका दस छोरामध्ये आत्रि एक थिए र यीनै आत्रिका सन्तानलाई आत्रेय गोत्र भनिन्छ"
        },

        {
            date: "सन् ९९६",
            event: "आत्रिका सन्तानहरु युग- युगान्तर पार गर्दै भारतमा बसोबास गरेका थिए भन्ने इतिहास छ"
        },
        {
            date: "",
            event: "राजा विक्रमादित्यका सन्ततिहरुले मलवामा सिमित रहेको राज्य सीमानालाई विस्तार गरेर धारानगरी सम्म ल्याएका थिए र सो ठाउँ वर्तमान समयमा भारतको मध्य-प्रदेशमा पर्दछ"
        },

        {
            date: "वि.सं. १०५३",
            event: "पौडेल बंश पुस्तकमा पूर्णप्रसाद नेपालले उल्लेख गरेअनुसार उदय भट्ट गडवाल पौडी आएको भन्ने ईतिहास छ र एघारौं शताब्दीमा उनी धारानगरी वरपर नै बसोबास गर्दथे"
        },
        {
            date: "११ औं शताब्दी",
            event: "लुटपाटबाट बच्नका लागि उदय भट्ट धारानगरी सहर छोडेर गङगा तरि स्थित कानपुर-लखनउ-गोरखपुरको बाटो हुँदै नेपालको बुटवल-पाल्पा हुँदै गुल्मी र डोटी राज्य प्रवेश गरे"
        },

        {
            date: "वि.सं. १२४६",
            event: "पण्डित वत्सराज भट्ट र राजपुतकन्या वसुन्धराका छोरा महाराज कालु थापा आत्रेय गोत्री बगाले थापाका मूलपुरुषले डोटीको काँडामालिकामा राज्यारोहण गरे"
        },
        {
            date: "",
            event: "कालु थापाको छोरा श्रीकृष्णले सिगिदी जग्गामा बसेर सिग्देल भए र श्रीदेव(पौडेलको थरको प्रारम्भकर्ता)ले पौडी जग्गामा बसेर पौडेल भए"
        },

        {
            date: "१६ औं शताब्दी",
            event: "ललितपुरका राजा सिद्धिनरसिंह मल्ल बाट विर्ता जग्गा पाई अहिले सिस्नेरी लामाटार भनेर चिनिने ठाउँमा बसेका गोपाल पौडेलका छोरा विश्वरम्भ पौडेल पनि राजा श्रीनिवास मल्ल बाट दानमा पाएको बिर्ता जग्गामा १७औ शताब्दीसम्म बसोबसे गरे"
        },

        {
            date: "",
            event: "विश्वरम्भ पौडेलका सात छोरामध्ये एक थिए धनपति पौडेल, जो सरकारी पुरोहित भएका नाताले चंगुमै १५ रोपनी जग्गा लिएर बसोबास गरे"
        },

        {
            date: "सन् १८३३",
            event: "शक्तिशाली भूकम्पले घर भत्किएपछि धनपतिका छोरा देवनारायण पौडेलपनि चंगुको सरकारी काम गरे बापत पाएको २४ रोपनी जग्गामा घर घडेरी लिएर बस्नु भयो"
        },

        {
            date: "सन् १८९५",
            event: "राजा रणबहादुर शाहको पालामा ब्राह्मणहरुले खाई-पाई गरि आएको जमिन र बिर्ता खोसिएपछि देवनारायणका छोरा वासुदेव पौडेल चंगु छोडेर काठमाडौंको नयाँगाउँ आइ बस्नुभयो"
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
            <div className="hidden md:block w-3 h-full bg-repeat bg-fill rounded-xl shadow-md shadow-black py-40 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{
                backgroundImage: `url(${WoodTextureFlip.src})`
            }} />
        </div>
    </>
}

export default Timeline;