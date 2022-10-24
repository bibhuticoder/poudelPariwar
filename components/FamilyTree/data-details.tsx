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
        bio: "He was a very good man.",
    },

    {
        id: 'narhari-poudel-wife',
        name: "wife",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: 'kalidas-poudel',
        name: "कालीदास पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: 'kalidas-poudel-wife',
        name: "Unknown",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: 'mokshyanath-poudel',
        name: "मोक्ष्यानाथ पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: 'mokshyanath-poudel-wife',
        name: "thuloaama पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: 'govinda-prasad-poudel',
        name: "गोविन्द प्रसाद पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: 'shiva-maya-poudel',
        name: "शिवमाया पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "ram-chandra-poudel",
        name: "रामचन्द्र पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "ganga-devi-poudel",
        name: "गंगादेवी पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "lava-poudel",
        name: "लभ पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "tara-poudel",
        name: "तारा पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "santosh-poudel",
        name: "सन्तोष पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "nirmala-phuyal",
        name: "निर्मला फुयाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "aarush-poudel",
        name: "आरुष पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "aayam-poudel",
        name: "आयाम पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "sanjaya-poudel",
        name: "संजय पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "shraddha-phuyal",
        name: "श्रद्धा फुयाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "siwanshi-poudel",
        name: "शिवान्शी पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "gauri-wagle",
        name: "गौरी वाग्ले",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "rupak-ko-dad",
        name: "rupak ko dad",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "rupak-ko-didi",
        name: "रुपक ko didi",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "rupa-wagle",
        name: "रुपा वाग्ले",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "vinaju",
        name: "Vinaju",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "rupak-wagle",
        name: "रुपक वाग्ले",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "lakshman-poudel",
        name: "लक्ष्मण पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "kanchhi-poudel",
        name: "कान्छी पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "puskar-poudel",
        name: "पुष्कर पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "kamala-poudel",
        name: "कमला पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "purusottam-poudel",
        name: "पुरुसोत्तम पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "lila-poudel",
        name: "लिला पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "priyal-poudel",
        name: "प्रियल पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "jaya-poudel",
        name: "जया पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "dipak-prasad-khanal",
        name: "दीपक प्रसाद खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "diwa-khanal",
        name: "दिवा खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "parth-khanal",
        name: "पार्थ खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "bijaya-poudel",
        name: "बिजया पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "kumar-bhandari",
        name: "कुमार भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "rama-bhandari",
        name: "रमा भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "dilli-ram-bhandari",
        name: "दिल्ली राम भण्डारी ",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "shobha-bhandari",
        name: "शोभा भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "pradeep-chalise",
        name: "प्रदीप चालिसे",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "shobha-son-1",
        name: "son-1",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "shobha-son-2",
        name: "son-2",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "prabha-bhandari",
        name: "प्रभा भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "anil-baral",
        name: "अनिल बराल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "prativa-bhandari",
        name: "प्रतिभा भण्डारी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "prativa-bhandari-husband",
        name: "Vinaju ",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "durga-dhakal",
        name: "दुर्गा ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "durga-dhakal-husband",
        name: "vinaju ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "dipeen-dhakal",
        name: "दिपीन ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "shreya-dhakal",
        name: "श्रेया ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "dipeen-shreeya-son-1",
        name: "son-1",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "dipeen-shreeya-son-2",
        name: "son-2",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "dileep-dhakal",
        name: "दिलीप ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "rashmi-dhakal",
        name: "रश्मि ढकाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "dipeep-rashmi-son-1",
        name: "son-1",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "dipeep-rashmi-son-2",
        name: "son-1",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "shankar-poudel",
        name: "शंकर पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "sabitri-poudel",
        name: "सावित्री पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "sabal-poudel",
        name: "सबल पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "salina-poudel",
        name: "सलिना पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "pravakar-poudel",
        name: "प्रभाकर पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "dhana-poudel",
        name: "धन पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "shraddha-poudel",
        name: "श्रद्धा पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "shreeya-poudel",
        name: "श्रीया पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "aditya-poudel",
        name: "आदित्य पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "damodar-poudel",
        name: "दामोदर प्रसाद पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "bhawani-poudel",
        name: "भवानी पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "laxmi-bhattrai",
        name: "लक्ष्मी भट्टराई",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "shardul-bhattrai",
        name: "शार्दुल भट्टराई",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "gaurav-bhattrai",
        name: "गौरव भट्टराई",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "nilam-shahi",
        name: "निलम शाही",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "saurav-bhattrai",
        name: "सौरब भट्टराई",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "manisha-silwal",
        name: "मनीषा सिलवाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "basu-dev-poudel",
        name: "बासु देव पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "binu-gautam-poudel",
        name: " बिनु पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
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
        bio: "He was a very good man.",
    },

    {
        id: "binu-khanal",
        name: "बिनु खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "umesh-khanal",
        name: "उमेश खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "subina-khanal",
        name: "सुबिना खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "sashi-raj-pandey",
        name: "सशी राज पाण्डे",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "rubina-khanal",
        name: "रुबिना खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "diwakar-poudel",
        name: "दिवाकर पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "bhawani-dawadi-poudel",
        name: "भवानी (दीपा) पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "dikshya-poudel",
        name: "दिक्ष्या पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "prawin-khanal",
        name: "प्रविन खनाल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "dristi-poudel",
        name: "द्रिश्टी पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "dikshyant-poudel",
        name: "दिक्ष्यंत पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "sarala-poudel-subedi",
        name: "सरला पौडेल सुवेदी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "chandra-subedi",
        name: "चन्द्र सुवेदी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "sarthak-subedi",
        name: "सार्थक सुवेदी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
    },

    {
        id: "sara-subedi",
        name: "सारा सुवेदी",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-female.png",
        gender: GENDER.FEMALE,
        bio: "He was a very good man.",
    },

    {
        id: "narayan-poudel",
        name: "नारायण प्रसाद पौडेल",
        dob: "1990-4-23",
        dod: null,
        image: "nepali-male.png",
        gender: GENDER.MALE,
        bio: "He was a very good man.",
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