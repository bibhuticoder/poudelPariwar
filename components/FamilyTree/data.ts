import _ from "lodash";
import { FAMILY_TREE_MODE, GENDER } from "../../enums";
import { TreeItem, Person } from "../../types";

// transformer
let _mode = FAMILY_TREE_MODE.MIN;
const $ = (item: TreeItem) => {

    // CONTAINER START
    let html = `<div class="person-group ${item.spouse ? '--married' : '--unmarried'}">`;


    const buildPerson = (person: Person) => {
        let html = `<div class="person" id="${person.id}">`;
        if (_mode == FAMILY_TREE_MODE.MAX) {
            html += `<img class="image" src="/images/nepali-${person.gender}.png" />`;
        }
        html += `<p class="name">${person.name}</p>`;
        // html += `<p class="age">${person.dob}</p>`;
        html += `</div>`;
        return html;
    }

    // SELF + SPOUSE
    if (item.self) html += buildPerson(item.self);
    if (item.spouse) html += buildPerson(item.spouse);

    // CONTAINER END
    html += `</div>`;
    return html;
}

const FAMILY_TREE_DATA = (mode = FAMILY_TREE_MODE.MIN) => {
    _mode = mode;
    return {

        innerHTML: $({
            self: {
                id: 'narahari-poudel',
                name: "नरहरि पौडेल",
                dob: "1990-4-23",
                dod: null,
                image: "nepali-male.png",
                gender: GENDER.MALE,
                bio: "He was a very good man.",
            },

            spouse: {
                id: 'narhari-poudyal-wife',
                name: "wife",
                dob: "1990-4-23",
                dod: null,
                image: "nepali-female.png",
                gender: GENDER.FEMALE,
                bio: "He was a very good man.",
            },
        }),

        children: [
            {

                innerHTML: $({
                    self: {
                        id: 'kalidas-poudyal',
                        name: "कालीदास पौडेल",
                        dob: "1990-4-23",
                        dod: null,
                        image: "nepali-male.png",
                        gender: GENDER.MALE,
                        bio: "He was a very good man.",
                    },

                    spouse: {
                        id: 'kalidas-poudyal-wife',
                        name: "Unknown",
                        dob: "1990-4-23",
                        dod: null,
                        image: "nepali-female.png",
                        gender: GENDER.FEMALE,
                        bio: "He was a very good man.",
                    },
                }),

                children: [
                    {
                        innerHTML: $({
                            self: {
                                id: 'mokshyanath-poudyal',
                                name: "मोक्ष्यानाथ पौडेल",
                                dob: "1990-4-23",
                                dod: null,
                                image: "nepali-male.png",
                                gender: GENDER.MALE,
                                bio: "He was a very good man.",
                            },
                            spouse: {
                                id: 'mokshyanath-poudyal-wife',
                                name: "thuloaama पौडेल",
                                dob: "1990-4-23",
                                dod: null,
                                image: "nepali-female.png",
                                gender: GENDER.FEMALE,
                                bio: "He was a very good man.",
                            },
                        }),

                        children: [],
                    },

                    {
                        innerHTML: $({
                            self: {
                                id: 'govinda-prasad-poudyal',
                                name: "गोविन्द प्रसाद पौडेल",
                                dob: "1990-4-23",
                                dod: null,
                                image: "nepali-male.png",
                                gender: GENDER.MALE,
                                bio: "He was a very good man.",
                            },
                            spouse: {
                                id: 'shiva-maya-poudyal',
                                name: "शिवमाया पौडेल",
                                dob: "1990-4-23",
                                dod: null,
                                image: "nepali-female.png",
                                gender: GENDER.FEMALE,
                                bio: "He was a very good man.",
                            },
                        }),

                        children: [

                            {
                                innerHTML: $({
                                    self: {
                                        id: "ram-chandra-poudyal",
                                        name: "रामचन्द्र पौडेल",
                                        dob: "1990-4-23",
                                        dod: null,
                                        image: "nepali-male.png",
                                        gender: GENDER.MALE,
                                        bio: "He was a very good man.",
                                    },
                                    spouse: {
                                        id: "ganga-devi-poudyal",
                                        name: "गंगादेवी पौडेल",
                                        dob: "1990-4-23",
                                        dod: null,
                                        image: "nepali-female.png",
                                        gender: GENDER.FEMALE,
                                        bio: "He was a very good man.",
                                    },
                                }),
                                children: [
                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "lava-poudyal",
                                                name: "लभ पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "tara-poudyal",
                                                name: "तारा पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "santosh-poudyal",
                                                        name: "सन्तोष पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "nirmala-phuyal",
                                                        name: "निर्मला फुयाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "aarush-poudyal",
                                                                name: "आरुष पौडेल",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.MALE,
                                                                bio: "He was a very good man.",
                                                            }
                                                        })
                                                    },

                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "aayam-poudyal",
                                                                name: "आयाम पौडेल",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.MALE,
                                                                bio: "He was a very good man.",
                                                            }
                                                        })
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "sanjaya-poudyal",
                                                        name: "संजय पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "shraddha-phuyal",
                                                        name: "श्रद्धा फुयाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "siwanshi-poudyal",
                                                                name: "शिवान्शी पौडेल",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.FEMALE,
                                                                bio: "He was a very good man.",
                                                            },
                                                        })
                                                    }
                                                ]
                                            }
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "gauri-wagle",
                                                name: "गौरी वाग्ले",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "rupak-ko-dad",
                                                name: "rupak ko dad",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),
                                        children: [

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "rupak-ko-didi",
                                                        name: "रुपक ko didi",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                }),
                                                children: []
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "rupa-wagle",
                                                        name: "रुपा वाग्ले",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "vinaju",
                                                        name: "Vinaju",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: []
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "rupak-wagle",
                                                        name: "रुपक वाग्ले",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                }),
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            },

                            {
                                innerHTML: $({
                                    self: {
                                        id: "lakshman-poudyal",
                                        name: "लक्ष्मण पौडेल",
                                        dob: "1990-4-23",
                                        dod: null,
                                        image: "nepali-male.png",
                                        gender: GENDER.MALE,
                                        bio: "He was a very good man.",
                                    },
                                    spouse: {
                                        id: "kanchhi-poudyal",
                                        name: "कान्छी पौडेल",
                                        dob: "1990-4-23",
                                        dod: null,
                                        image: "nepali-female.png",
                                        gender: GENDER.FEMALE,
                                        bio: "He was a very good man.",
                                    },
                                }),
                                children: [
                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "puskar-poudyal",
                                                name: "पुष्कर पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "kamala-poudyal",
                                                name: "कमला पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "purusottam-poudyal",
                                                        name: "पुरुसोत्तम पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "lila-poudyal",
                                                        name: "लिला पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "priyal-poudyal",
                                                                name: "प्रियल पौडेल",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.FEMALE,
                                                                bio: "He was a very good man.",
                                                            },

                                                        }),
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "jaya-poudyal",
                                                        name: "जया पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "dipak-prasad-khanal",
                                                        name: "दीपक प्रसाद खनाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "diwa-khanal",
                                                                name: "दिवा खनाल",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-female.png",
                                                                gender: GENDER.FEMALE,
                                                                bio: "He was a very good man.",
                                                            },

                                                        }),
                                                    },

                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "parth-khanal",
                                                                name: "पार्थ खनाल",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.MALE,
                                                                bio: "He was a very good man.",
                                                            },

                                                        }),
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "bijaya-poudyal",
                                                        name: "बिजया पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "kumar-bhandari",
                                                        name: "कुमार भण्डारी",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: []
                                            }
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "rama-bhandari",
                                                name: "रमा भण्डारी",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "dilli-ram-bhandari",
                                                name: "दिल्ली राम भण्डारी ",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "shobha-bhandari",
                                                        name: "शोभा भण्डारी",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                    spouse: {
                                                        id: "pradeep-chalise",
                                                        name: "प्रदीप चालिसे",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "shobha-son-1",
                                                                name: "son-1",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.MALE,
                                                                bio: "He was a very good man.",
                                                            }
                                                        })
                                                    },

                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "shobha-son-2",
                                                                name: "son-2",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.MALE,
                                                                bio: "He was a very good man.",
                                                            }
                                                        })
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "prabha-bhandari",
                                                        name: "प्रभा भण्डारी",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                    spouse: {
                                                        id: "anil-baral",
                                                        name: "अनिल बराल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: []
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "prativa-bhandari",
                                                        name: "प्रतिभा भण्डारी",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                    spouse: {
                                                        id: "bhinaju",
                                                        name: "Vinaju ",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                })
                                            },
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "durga-dhakal",
                                                name: "दुर्गा ढकाल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "vinaju-dhakal",
                                                name: "vinaju ढकाल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "dipeen-dhakal",
                                                        name: "दिपीन ढकाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                    spouse: {
                                                        id: "shreya-dhakal",
                                                        name: "श्रेया ढकाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "son-1",
                                                                name: "son-1",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.MALE,
                                                                bio: "He was a very good man.",
                                                            }
                                                        }),
                                                    },

                                                    {

                                                        innerHTML: $({
                                                            self: {
                                                                id: "son-2",
                                                                name: "son-2",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.MALE,
                                                                bio: "He was a very good man.",
                                                            }
                                                        })
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "dileep-dhakal",
                                                        name: "दिलीप ढकाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                    spouse: {
                                                        id: "rashmi-dhakal",
                                                        name: "रश्मि ढकाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: {
                                                                id: "son-1",
                                                                name: "son-1",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.MALE,
                                                                bio: "He was a very good man.",
                                                            }
                                                        }),
                                                    },

                                                    {

                                                        innerHTML: $({
                                                            self: {
                                                                id: "daughter-2",
                                                                name: "daughter-2",
                                                                dob: "1990-4-23",
                                                                dod: null,
                                                                image: "nepali-male.png",
                                                                gender: GENDER.FEMALE,
                                                                bio: "He was a very good man.",
                                                            }
                                                        })
                                                    }
                                                ]
                                            },
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "shankar-poudyal",
                                                name: "शंकर पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "sabitri-poudyal",
                                                name: "सावित्री पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "sabal-poudyal",
                                                        name: "सबल पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                })
                                            },
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "salina-poudyal",
                                                        name: "सलिना पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                })
                                            }
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "pravakar-poudyal",
                                                name: "प्रभाकर पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "dhana-poudyal",
                                                name: "धन पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "shraddha-poudyal",
                                                        name: "श्रद्धा पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    }
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "shreeya-poudyal",
                                                        name: "श्रीया पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    }
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "aditya-poudyal",
                                                        name: "आदित्य पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    }
                                                })
                                            },
                                        ]
                                    }
                                ]
                            },

                            {
                                innerHTML: $({
                                    self: {
                                        id: "damodar-poudyal",
                                        name: "दामोदर प्रसाद पौडेल",
                                        dob: "1990-4-23",
                                        dod: null,
                                        image: "nepali-male.png",
                                        gender: GENDER.MALE,
                                        bio: "He was a very good man.",
                                    },
                                    spouse: {
                                        id: "bhawani-poudyal",
                                        name: "भवानी पौडेल",
                                        dob: "1990-4-23",
                                        dod: null,
                                        image: "nepali-female.png",
                                        gender: GENDER.FEMALE,
                                        bio: "He was a very good man.",
                                    },
                                }),
                                children: [
                                    {

                                        innerHTML: $({
                                            self: {
                                                id: "laxmi-bhattrai",
                                                name: "लक्ष्मी भट्टराई",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "shardul-bhattrai",
                                                name: "शार्दुल भट्टराई",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            }
                                        }),

                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "gaurav-bhattrai",
                                                        name: "गौरव भट्टराई",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "nilam-shahi",
                                                        name: "निलम शाही",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    }
                                                    ,

                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "saurav-bhattrai",
                                                        name: "सौरब भट्टराई",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "manisha-silwal",
                                                        name: "मनीषा सिलवाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                })
                                            }
                                        ],
                                    },

                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "basu-dev-poudyal",
                                                name: "बासु देव पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "binu-gautam-poudyal",
                                                name: " बिनु पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),

                                        children: [
                                            {

                                                innerHTML: $({
                                                    self: {
                                                        id: "bibhuti-poudyal",
                                                        name: "विभूति पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },


                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "biranchi-poudyal",
                                                        name: " बिरन्ची पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "pratima-luitel",
                                                        name: "प्रतिमा लुइँटेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),

                                            },
                                        ],
                                    },

                                    {

                                        innerHTML: $({
                                            self: {
                                                id: "binu-khanal",
                                                name: "बिनु खनाल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "umesh-khanal",
                                                name: "उमेश खनाल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            }
                                        }),

                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "subina-khanal",
                                                        name: "सुबिना खनाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "sashi-raj-pandey",
                                                        name: "सशी राज पाण्डे",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "rubina-khanal",
                                                        name: "रुबिना खनाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },


                                                })
                                            }
                                        ],
                                    },

                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "diwakar-poudyal",
                                                name: "दिवाकर पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "bhawani-dawadi-poudyal",
                                                name: "भवानी (दीपा) पौडेल",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.FEMALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),

                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "dikshya-poudyal",
                                                        name: "दिक्ष्या पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                    spouse: {
                                                        id: "prawin-khanal",
                                                        name: "प्रविन खनाल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },
                                                }),

                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "dristi-poudyal",
                                                        name: "द्रिश्टी पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                }),

                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "dikshyant-poudyal",
                                                        name: "दिक्ष्यंत पौडेल",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-male.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                }),

                                            },
                                        ],
                                    },

                                    {
                                        innerHTML: $({
                                            self: {
                                                id: "sarala-poudyal-subedi",
                                                name: "सरला पौडेल सुवेदी",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-male.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                            spouse: {
                                                id: "chandra-subedi",
                                                name: "चन्द्र सुवेदी",
                                                dob: "1990-4-23",
                                                dod: null,
                                                image: "nepali-female.png",
                                                gender: GENDER.MALE,
                                                bio: "He was a very good man.",
                                            },
                                        }),

                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "sarthak-subedi",
                                                        name: "सार्थक सुवेदी",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.MALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                }),

                                            },

                                            {
                                                innerHTML: $({
                                                    self: {
                                                        id: "sara-subedi",
                                                        name: "सारा सुवेदी",
                                                        dob: "1990-4-23",
                                                        dod: null,
                                                        image: "nepali-female.png",
                                                        gender: GENDER.FEMALE,
                                                        bio: "He was a very good man.",
                                                    },

                                                }),

                                            },
                                        ],
                                    },
                                ],
                            },

                            {
                                innerHTML: $({
                                    self: {
                                        id: "narayan-poudyal",
                                        name: "नारायण प्रसाद पौडेल",
                                        dob: "1990-4-23",
                                        dod: null,
                                        image: "nepali-male.png",
                                        gender: GENDER.MALE,
                                        bio: "He was a very good man.",
                                    },

                                }),
                                children: null
                            }
                        ],
                    },
                ]
            }
        ]
    }
};


export { FAMILY_TREE_DATA };