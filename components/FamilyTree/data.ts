import _ from "lodash";
import { FAMILY_TREE_MODE, GENDER } from "../../enums";
import { TreeItem, Person } from "../../types";
import { findPersonById } from "./data-details";

// transformer: Transforms TreeItem to Treant-format
let _mode = FAMILY_TREE_MODE.MIN;
const $ = (item: TreeItem) => {

    let self: Person | null = findPersonById(item.self);
    let spouse: Person | null = null;
    if (item.spouse) spouse = findPersonById(item.spouse);

    // CONTAINER START
    let html = `<div class="person-group ${spouse ? '--married' : '--unmarried'}">`;

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
    if (self) html += buildPerson(self);
    if (spouse) html += buildPerson(spouse);

    // CONTAINER END
    html += `</div>`;
    return html;
}

const FAMILY_TREE_DATA = (mode = FAMILY_TREE_MODE.MIN) => {
    _mode = mode;
    return {
        innerHTML: $({
            self: 'narahari-poudel',
            spouse: 'narhari-poudel-wife'
        }),

        children: [
            {
                innerHTML: $({
                    self: 'kalidas-poudel',
                    spouse: 'kalidas-poudel-wife'
                }),

                children: [
                    {
                        innerHTML: $({
                            self: 'mokshyanath-poudel',
                            spouse: 'mokshyanath-poudel-wife'
                        }),
                    },

                    {
                        innerHTML: $({
                            self: 'govinda-prasad-poudel',
                            spouse: 'shiva-maya-poudel'
                        }),

                        children: [

                            {
                                innerHTML: $({
                                    self: "ram-chandra-poudel",
                                    spouse: "ganga-devi-poudel"
                                }),
                                children: [
                                    {
                                        innerHTML: $({
                                            self: "lava-poudel",
                                            spouse: "tara-poudel"
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "santosh-poudel",
                                                    spouse: "nirmala-phuyal"
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: "aarush-poudel"
                                                        })
                                                    },

                                                    {
                                                        innerHTML: $({
                                                            self: "aayam-poudel"
                                                        })
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "sanjaya-poudel",
                                                    spouse: "shraddha-phuyal"
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: "siwanshi-poudel"
                                                        })
                                                    }
                                                ]
                                            }
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: "gauri-wagle",
                                            spouse: "rupak-ko-dad"
                                        }),
                                        children: [

                                            {
                                                innerHTML: $({
                                                    self: "rupak-ko-didi"
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "rupa-wagle",
                                                    spouse: "vinaju"
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "rupak-wagle"

                                                })
                                            }
                                        ]
                                    }
                                ]
                            },

                            {
                                innerHTML: $({
                                    self: "lakshman-poudel",
                                    spouse: "kanchhi-poudel"
                                }),
                                children: [
                                    {
                                        innerHTML: $({
                                            self: "puskar-poudel",
                                            spouse: "kamala-poudel"
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "purusottam-poudel",
                                                    spouse: "lila-poudel"
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: "priyal-poudel"
                                                        }),
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "jaya-poudel",
                                                    spouse: "dipak-prasad-khanal",
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: "diwa-khanal"
                                                        }),
                                                    },

                                                    {
                                                        innerHTML: $({
                                                            self: "parth-khanal"
                                                        }),
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "bijaya-poudel",
                                                    spouse: "kumar-bhandari"
                                                }),
                                            }
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: "rama-bhandari",
                                            spouse: "dilli-ram-bhandari"
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "shobha-bhandari",
                                                    spouse: "pradeep-chalise"
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: "shobha-son-1"
                                                        })
                                                    },

                                                    {
                                                        innerHTML: $({
                                                            self: "shobha-son-2"
                                                        })
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "prabha-bhandari",
                                                    spouse: "anil-baral"
                                                }),
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "prativa-bhandari",
                                                    spouse: "prativa-bhandari-husband"
                                                })
                                            },
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: "durga-dhakal",
                                            spouse: "durga-dhakal-husband"
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "dipeen-dhakal",
                                                    spouse: "shreya-dhakal",
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: "dipeen-shreeya-son-1"
                                                        }),
                                                    },

                                                    {

                                                        innerHTML: $({
                                                            self: "dipeen-shreeya-son-2"
                                                        })
                                                    }
                                                ]
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "dileep-dhakal",
                                                    spouse: "rashmi-dhakal"
                                                }),
                                                children: [
                                                    {
                                                        innerHTML: $({
                                                            self: "dipeep-rashmi-son-1"
                                                        }),
                                                    },

                                                    {

                                                        innerHTML: $({
                                                            self: "dipeep-rashmi-son-2"
                                                        })
                                                    }
                                                ]
                                            },
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: "shankar-poudel",
                                            spouse: "sabitri-poudel"
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "sabal-poudel"
                                                })
                                            },
                                            {
                                                innerHTML: $({
                                                    self: "salina-poudel"
                                                })
                                            }
                                        ]
                                    },

                                    {
                                        innerHTML: $({
                                            self: "pravakar-poudel",
                                            spouse: "dhana-poudel",
                                        }),
                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "shraddha-poudel"
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "shreeya-poudel"
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "aditya-poudel"
                                                })
                                            },
                                        ]
                                    }
                                ]
                            },

                            {
                                innerHTML: $({
                                    self: "damodar-poudel",
                                    spouse: "bhawani-poudel"
                                }),
                                children: [
                                    {

                                        innerHTML: $({
                                            self: "laxmi-bhattrai",
                                            spouse: "shardul-bhattrai"
                                        }),

                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "gaurav-bhattrai",
                                                    spouse: "nilam-shahi"
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "saurav-bhattrai",
                                                    spouse: "manisha-silwal"
                                                })
                                            }
                                        ],
                                    },

                                    {
                                        innerHTML: $({
                                            self: "basu-dev-poudel",
                                            spouse: "binu-gautam-poudel"
                                        }),

                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "biranchi-poudel",
                                                    spouse: "pratima-luitel"
                                                }),

                                            },

                                            {

                                                innerHTML: $({
                                                    self: "bibhuti-poudel"
                                                })
                                            },
                                        ],
                                    },

                                    {

                                        innerHTML: $({
                                            self: "binu-khanal",
                                            spouse: "umesh-khanal"
                                        }),

                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "subina-khanal",
                                                    spouse: "sashi-raj-pandey"
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "rubina-khanal"
                                                })
                                            }
                                        ],
                                    },

                                    {
                                        innerHTML: $({
                                            self: "diwakar-poudel",
                                            spouse: "bhawani-dawadi-poudel"
                                        }),

                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "dikshya-poudel",
                                                    spouse: "prawin-khanal"
                                                }),

                                            },

                                            {
                                                innerHTML: $({
                                                    self: "dristi-poudel"
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "dikshyant-poudel"
                                                })
                                            },
                                        ],
                                    },

                                    {
                                        innerHTML: $({
                                            self: "sarala-poudel-subedi",
                                            spouse: "chandra-subedi"
                                        }),

                                        children: [
                                            {
                                                innerHTML: $({
                                                    self: "sarthak-subedi"
                                                })
                                            },

                                            {
                                                innerHTML: $({
                                                    self: "sara-subedi"
                                                })
                                            },
                                        ],
                                    },
                                ],
                            },

                            {
                                innerHTML: $({
                                    self: "narayan-poudel"
                                })
                            }
                        ],
                    },
                ]
            }
        ]
    }
}


export { FAMILY_TREE_DATA };