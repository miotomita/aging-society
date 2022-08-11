var config = {
    style: 'mapbox://styles/miotomita/cl6k0935u001f14lsnrb9py0b',
    accessToken: 'pk.eyJ1IjoibWlvdG9taXRhIiwiYSI6ImNsNW1ueWNoczB2aGEzZGx2MmFkbWNhcXEifQ.eE7w24rpPLYVv4Hjl72F8A',
    showMarkers: false,
    theme: 'light',
    title: "Nursing Home Shortage Haunts 'Super-Aging' Japan",
    subtitle: 'Aug 11, 2022',
    byline: 'By Mio Tomita',
    footer: 'footer footer footer',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            title: '',
            image: '',
            description: 'Japan is well known as the front runner in the super-aging society. As Baby Boomers, the generation that accounts for 8% of the country’s total population, enter their elderly years, the shortage of nursing homes and care workers is becoming even more acute.',
            location: {
                center: [140.88211, 38.26036],
                zoom: 4.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 1
                },
                {
                    layer: 'pref_2020',
                    opacity: 1
                },
                {
                    layer: 'muni_2045',
                    opacity: 0
                }, 
                {
                    layer: 'pref_2045',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 0
                }     
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'step-one',
            alignment: 'right',
            title: 'Capacity of long-term facilities per 1,000 people aged 75 and over',
            description: 'The map shows the capacity of long-term care facilities per 1,000 people aged 75 and over in each municipality. Nursing home shortages are common to almost every populated area in the country.',
            image: './img/color_scheme.svg',
            location: {
                // pitch: 55.50,
                // bearing: -7.20
                center: [140.88211, 38.26036],
                zoom: 5.3,
                pitch: 32.5,
                bearing: -7.2
            },
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        {
            id: 'step-two',
            alignment: 'right',
            title: 'Percentage of households headed by an elderly person',
            image: './img/percentage_of_households_no_header.png',
            description: 'Growing older at home is not easy. By household, approximately 70% of the elderly live on their own or in a couple without a younger generation. In 2020, households headed by a person aged 75 or over who live on their own or in a couple account for more than  4 million households, 13% of total households in the country. Combined with households headed by those aged 65-74, one in four are elderly households living on their own or in a couple.',
            location: {
                // pitch: 55.50,
                // bearing: -7.20
                center: [140.88211, 38.26036],
                zoom: 5.3,
                pitch: 32.5,
                bearing: -7.2
            },
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        {
            id: 'tokyo-1',
            alignment: 'right',
            title: 'Tokyo',
            image: '',
            description: 'The shortage of facilities in the Tokyo metropolitan area is particularly severe. On average, there is only one residential care facility per 1000 people over the age of 75 in Tokyo. A simple calculation based on the number of capacity per facility shows that only 1 in 20 people over 75 can be admitted to a nursing home.',
            location: {
                center: [139.77448,	35.68405],
                zoom: 9.15,
                pitch: 40.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'radius_50km',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 0
                }     
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'tokyo-2',
            alignment: 'right',
            title: 'Within a 50 km radius from Central Tokyo',
            image: '',
            description: 'The central area of Tokyo is tinted red, indicating a shortage of nursing homes relative to the population. Dark green areas are only slightly visible far from the center or outside the 50 km radius.',
            location: {
                center: [139.77448,	35.68405],
                zoom: 9.15,
                pitch: 40.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'radius_50km',
                    opacity: 1
                },
                {
                    layer: 'muni_2020',
                    opacity: 1
                },
                {
                    layer: 'railway',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'tokyo-3',
            alignment: 'right',
            title: 'Public long-term nursing homes',
            image: '',
            description: 'Each blue circle on the map represents a public or a publicly supported nursing home, with the larger circles for the facilities with bigger capacity relative to the population aged 75 and over, and brown lines represents railways. Facilities with larger capacities are located near the end of the line or off the line. Even if a family is lucky enough to find a nursing home for an elderly member, it is not rare that the facility is located in 2 - 3 hours distance from their home and hard to visit frequently.',
            location: {
                center: [139.77448,	35.68405],
                zoom: 9.15,
                pitch: 40.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'railway',
                    opacity: 1
                },
                {
                    layer: 'public',
                    opacity: 1
                },
                {
                    layer: 'private',
                    opacity: 0
                },
                {
                    layer: 'muni_2020',
                    opacity: 0
                },
                {
                    layer: 'pref_2020',
                    opacity: 0
                },
                {
                    layer: 'radius_50km',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'tokyo-4',
            alignment: 'right',
            title: 'Private long-term nursing homes',
            image: '',
            description: 'The situation becomes somewhat better for a family when private, fee-based nursing homes, represented as red circles on the map, are an option. However, whereas public facilities  do not require an upfront payment when moving in, private nursing homes require funds ranging from several million yen to several hundred million yen for the most expensive ones, and the monthly payments are also more expensive.',
            location: {
                center: [139.77448,	35.68405],
                zoom: 9.15,
                pitch: 40.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'railway',
                    opacity: 1
                },
                {
                    layer: 'private',
                    opacity: 1
                },
                {
                    layer: 'public',
                    opacity: 1
                },
                {
                    layer: 'muni_2020',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'radius_50km',
                    opacity: 0
                }
            ]
        },  
        {
            id: 'Osaka-1',
            alignment: 'left',
            title: 'Osaka',
            image: '',
            description: 'Osaka, the largest city in western Japan, is in the same situation as Tokyo. Here, too, there is only one bed in long-term nursing home for every 20 elderly persons aged 75 and over. It is common for people to travel long-distance to Nara or Shiga every week to visit their elderly families in a nursing home.',
            location: {
                center: [135.4959,	34.7023],
                zoom: 9.15,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 1
                },
                {
                    layer: 'public',
                    opacity: 0
                },
                {
                    layer: 'private',
                    opacity: 0
                },
                {
                    layer: 'railway',
                    opacity: 0
                },
                {
                    layer: 'radius_50km',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Osaka-2',
            alignment: 'left',
            title: 'Public long-term nursing homes in Osaka',
            image: '',
            description: 'Among public nursing homes, the less expensive "special nursing homes for the elderly", which accept also people with dementia, have many applicants for moving in, and there are 290,000 people nationwide on the waiting list. One special nursing home in Toyonaka City, right next to Osaka City, has a waiting list of nearly 900 people for its 66-person capacity.',
            location: {
                center: [135.4959,	34.7023],
                zoom: 9.15,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'radius_50km',
                    opacity: 1
                },
                {
                    layer: 'railway',
                    opacity: 1
                },
                {
                    layer: 'muni_2020',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 1
                },
                {
                    layer: 'private',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Osaka-3',
            alignment: 'left',
            title: 'Private long-term nursing homes in Osaka',
            image: '',
            description: 'Some paid nursing homes have openings in their capacity. However, in addition to higher fees, facilities vary in their ability to accommodate people with high levels of nursing care and dementia. Due to the declining birthrate and rapidly aging population, a shortage of nursing staff is also becoming an issue.',
            location: {
                center: [135.4959,	34.7023],
                zoom: 9.15,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 1
                },
                {
                    layer: 'railway',
                    opacity: 1
                },
                {
                    layer: 'private',
                    opacity: 1
                },
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Nagoya-1',
            alignment: 'right',
            title: 'Nagoya',
            image: '',
            description: 'Nagoya, located in the central part of Japan, is also in shortage of facilities within the prefecture.  Once outside the prefecture, there are several large facilities located within 50 km of each other, but some of them admit only residents of the municipalities or prefectures.',
            location: {
                center: [136.88162,	35.17069],
                zoom: 9.15,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [
                {
                    layer: 'public',
                    opacity: 0
                },
                {
                    layer: 'private',
                    opacity: 0
                },
                {
                    layer: 'railway',
                    opacity: 0
                },
                {
                    layer: 'muni_2020',
                    opacity: 1
                },
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Nagoya-2',
            alignment: 'right',
            title: 'Populated areas around Nagoya',
            description:'In populated areas such as Nagoya, Toyota, and Kariya, where manufacturing industries such as automotives are concentrated, many nursing homes still have long waiting lists.',
            location: {
                center: [136.88162,	35.17069],
                zoom: 9.15,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 1
                },
                {
                    layer: 'private',
                    opacity: 1
                },
                {
                    layer: 'railway',
                    opacity: 1
                },
                {
                    layer: 'radius_50km',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Japan-2020-1',
            alignment: 'right', 
            image: '',
            title: '2020',
            description: 'Although there have been some improvements, such as an increase in the capacity of special nursing homes by 200,000 from a decade ago, super-aging at an unprecedented rate is making the situation even worse.',
            location: {
                center: [140.88211, 38.26036],
                zoom: 5.2,
                pitch: 40.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 1
                },
                {
                    layer: 'muni_2045',
                    opacity: 0
                },
                {
                    layer: 'railway',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 0
                },
                {
                    layer: 'private',
                    opacity: 0
                },
                {
                    layer: 'radius_50km',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Japan-2020-2',
            alignment: 'center',
            title: 'Number of people who left their jobs in the previous year due to caregiving',
            image: './img/caregiving_no_header.png',
            description: 'The shortage of nursing homes is affecting the working-age population as well. Every year 100,000 people have to leave their jobs to care for aged or sick family members. According to the 2018 survey by the Ministry of Internal Affairs and Communications, the number of people who left their jobs in the previous year due to caregiving was 99,100, of which nearly 80% were women.',
            location: {
                center: [140.88211, 38.26036],
                zoom: 5.2,
                pitch: 40.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 1
                },
                {
                    layer: 'muni_2045',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'step-eight',
            alignment: 'right',
            title: '2045',
            image: '',
            description: 'Estimates suggest that by 2045, the aging society will peak, and the percentage of people aged 75 and over in the total population will rise from the current 15% to 21%. The number of red areas on the map will also increase as the shortage of nursing care facilities expands. In order to reduce the number of "nursing care refugees," not only development of facilities, but various approaches such as preventive assistance to maintain the health of the elderly are necessary.',
            location: {
                center: [140.88211, 38.26036],
                zoom: 5.2,
                pitch: 40.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'muni_2045',
                    opacity: 1
                },
                {
                    layer: 'muni_2020',
                    opacity: 0
                },
                {
                    layer: 'pref_2045',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'step-nine',
            alignment: 'center',
            image: './img/aging.png',
            location: {
                center: [140.88211, 38.26036],
                zoom: 4.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 0
                },
                {
                    layer: 'pref_2020',
                    opacity: 0
                },
                {
                    layer: 'pref_2045',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        }


    ]
};
