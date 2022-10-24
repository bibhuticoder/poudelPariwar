import { GENDER } from "../../enums";
import { Person } from "../../types";
import { npDigit, ageByDob } from "../../utils/index.utils";
import * as DOMPurify from 'dompurify';

const DETAILS: Person[] = [
    {
        id: 'narahari-poudel',
        name: "नरहरि पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: 'narhari-poudel-wife',
        name: "wife",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: 'kalidas-poudel',
        name: "कालीदास पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: 'kalidas-poudel-wife',
        name: "Unknown",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: 'mokshyanath-poudel',
        name: "मोक्ष्यानाथ पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: 'mokshyanath-poudel-wife',
        name: "thuloaama पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: 'govinda-prasad-poudel',
        name: "गोविन्द प्रसाद पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: 'shiva-maya-poudel',
        name: "शिवमाया पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "ram-chandra-poudel",
        name: "रामचन्द्र पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "ganga-devi-poudel",
        name: "गंगादेवी पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "lava-poudel",
        name: "लभ पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "tara-poudel",
        name: "तारा पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "santosh-poudel",
        name: "सन्तोष पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "nirmala-phuyal",
        name: "निर्मला फुयाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "aarush-poudel",
        name: "आरुष पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "aayam-poudel",
        name: "आयाम पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "sanjaya-poudel",
        name: "संजय पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "shraddha-phuyal",
        name: "श्रद्धा फुयाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "siwanshi-poudel",
        name: "शिवान्शी पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "gauri-wagle",
        name: "गौरी वाग्ले",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "rupak-ko-dad",
        name: "rupak ko dad",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "rupak-ko-didi",
        name: "रुपक ko didi",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "rupa-wagle",
        name: "रुपा वाग्ले",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "vinaju",
        name: "Vinaju",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "rupak-wagle",
        name: "रुपक वाग्ले",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "lakshman-poudel",
        name: "लक्ष्मण पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "kanchhi-poudel",
        name: "कान्छी पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "puskar-poudel",
        name: "पुष्कर पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "kamala-poudel",
        name: "कमला पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "purusottam-poudel",
        name: "पुरुसोत्तम पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "lila-poudel",
        name: "लिला पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "priyal-poudel",
        name: "प्रियल पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "jaya-poudel",
        name: "जया पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dipak-prasad-khanal",
        name: "दीपक प्रसाद खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "diwa-khanal",
        name: "दिवा खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "parth-khanal",
        name: "पार्थ खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "bijaya-poudel",
        name: "बिजया पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "kumar-bhandari",
        name: "कुमार भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "rama-bhandari",
        name: "रमा भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dilli-ram-bhandari",
        name: "दिल्ली राम भण्डारी ",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "shobha-bhandari",
        name: "शोभा भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "pradeep-chalise",
        name: "प्रदीप चालिसे",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "shobha-son-1",
        name: "son-1",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "shobha-son-2",
        name: "son-2",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "prabha-bhandari",
        name: "प्रभा भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "anil-baral",
        name: "अनिल बराल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "prativa-bhandari",
        name: "प्रतिभा भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "prativa-bhandari-husband",
        name: "Vinaju ",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "durga-dhakal",
        name: "दुर्गा ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "durga-dhakal-husband",
        name: "vinaju ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dipeen-dhakal",
        name: "दिपीन ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "shreya-dhakal",
        name: "श्रेया ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dipeen-shreeya-son-1",
        name: "son-1",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dipeen-shreeya-son-2",
        name: "son-2",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dileep-dhakal",
        name: "दिलीप ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "rashmi-dhakal",
        name: "रश्मि ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dipeep-rashmi-son-1",
        name: "son-1",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dipeep-rashmi-son-2",
        name: "son-1",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "shankar-poudel",
        name: "शंकर पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "sabitri-poudel",
        name: "सावित्री पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "sabal-poudel",
        name: "सबल पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "salina-poudel",
        name: "सलिना पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "pravakar-poudel",
        name: "प्रभाकर पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dhana-poudel",
        name: "धन पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "shraddha-poudel",
        name: "श्रद्धा पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "shreeya-poudel",
        name: "श्रीया पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "aditya-poudel",
        name: "आदित्य पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "damodar-poudel",
        name: "दामोदर प्रसाद पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "bhawani-poudel",
        name: "भवानी पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "laxmi-bhattrai",
        name: "लक्ष्मी भट्टराई",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "shardul-bhattrai",
        name: "शार्दुल भट्टराई",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "gaurav-bhattrai",
        name: "गौरव भट्टराई",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "nilam-shahi",
        name: "निलम शाही",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "saurav-bhattrai",
        name: "सौरब भट्टराई",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "manisha-silwal",
        name: "मनीषा सिलवाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "basu-dev-poudel",
        name: "बासु देव पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "binu-gautam-poudel",
        name: " बिनु पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "bibhuti-poudel",
        name: "विभूति पौडेल",
        dob: "1997/08/07",
        dod: null,
        gender: GENDER.MALE,
        bio: `
            <b> Academic </b>: Masters in Computer Science
            <br/>
            <b> Profession </b>: CTO at TheValueCrew
            <br/>
            <b>Address </b>: Kathmandu, Nepal
            <br/>
            <br/>
            I am a software developer from Kathmandu. I believe building successful software requires not only tech skills but also positive emotions & empathy.
            I spend my free time on open source, reading & cycling.
        `,
    },

    {
        id: "biranchi-poudel",
        name: "बिरन्ची पौडेल",
        dob: "1994-10-06",
        dod: null,
        gender: GENDER.MALE,
        bio: `
        <b> Academics </b>: Masters in English Literature & International Relation
        <br/>
        <b> Profession </b>: Freelance Writer & Senior Researcher at Pioneer Research Center Nepal
        <br/>
        <b> Address </b>: Kathmandu, Nepal

        <br/>
        <br/>
        I am a social science researcher and a writing entrepreneur with good publication profile in national and international platforms.
        `,
    },

    {
        id: "pratima-luitel",
        name: "प्रतिमा लुइँटेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "binu-khanal",
        name: "बिनु खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "umesh-khanal",
        name: "उमेश खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "subina-khanal",
        name: "सुबिना खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "sashi-raj-pandey",
        name: "सशी राज पाण्डे",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "rubina-khanal",
        name: "रुबिना खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "diwakar-poudel",
        name: "दिवाकर पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "bhawani-dawadi-poudel",
        name: "भवानी (दीपा) पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dikshya-poudel",
        name: "दिक्ष्या पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "prawin-khanal",
        name: "प्रविन खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "dristi-poudel",
        name: "द्रिश्टी पौडेल",
        dob: "2001-04-24",
        dod: null,
        gender: GENDER.FEMALE,
        bio: `
        <b> Education </b>: Business in Business Studies
        <br/>
        <b> Profession</b>: Internship in Nic Asia Bank
        <br/>
        <br/>
        I am a kind hearted person who believes in humanistic philosophy.
        `,
    },

    {
        id: "dikshyant-poudel",
        name: "दिक्ष्यंत पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "sarala-poudel-subedi",
        name: "सरला पौडेल सुवेदी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "chandra-subedi",
        name: "चन्द्र सुवेदी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "sarthak-subedi",
        name: "सार्थक सुवेदी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "sara-subedi",
        name: "सारा सुवेदी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "Please fill up thr form to update your information.",
    },

    {
        id: "narayan-poudel",
        name: "नारायण प्रसाद पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "Please fill up thr form to update your information.",
    },
]

const findPersonById = (id: String): Person | null => {
    let person = DETAILS.find(d => d.id == id);
    if (person) {
        // processing
        if (person.dob)
            person.age = npDigit(ageByDob(person.dob).toString()) + ' वर्ष';

        if (person.bio)
            person.bio = DOMPurify.sanitize(person.bio);

        return person;
    }
    return null;
}

export { findPersonById };