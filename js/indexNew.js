

// window.addEventListener('resize', function () {
//     location.reload();
// });
const openMenu = document.querySelector(".open")
const menuContainer = document.querySelector(".menu-container")
openMenu.addEventListener("click", function () {
    menuContainer.classList.add("active");
})
const closeMenu = document.querySelector(".close")
closeMenu.addEventListener('click', function () {
    menuContainer.classList.remove("active");
})


function hideshowNestedMenu(menuId, arrowIcon, event, trueVal) {
    if (event) {
        event.preventDefault()
    }
    const nestedMenu = document.querySelector(menuId)
    const arrowIcons = document.querySelector(arrowIcon)
    if (nestedMenu.style.display === 'none' || nestedMenu.style.display === '') {
        nestedMenu.style.display = 'block'
        if (trueVal === true) {
            arrowIcons.style.transform = 'rotate(180deg)'
        } else {
            arrowIcons.style.transform = 'rotate(0deg)'
        }
    } else if (nestedMenu.style.display === 'block') {
        nestedMenu.style.display = 'none'
        if (trueVal === true) {
            arrowIcons.style.transform = 'rotate(0deg)'
        } else {
            arrowIcons.style.transform = 'rotate(-90deg)'
        }

    }
}


//slider section 
const sliderItems = document.querySelectorAll(".slider-item")


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal', // 'horizontal' or 'vertical'
        loop: true, // Loop through slides

        // If you want pagination (bullets)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Delay between slides (in milliseconds)
            disableOnInteraction: false, // Prevent autoplay from stopping after interaction
        },

        // If you want navigation buttons
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // If you want a scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});


// card hover effects 
function cardEffect(event, index, arr) {

    // hoverElement = event.target
    // hoverElement.style.zIndex = '5'
    // console.log("tagets", hoverElement, arr)
    const zIndexMap = {
        1: [5, 4, 3, 2, 1],
        2: [4, 5, 3, 2, 1],
        3: [3, 4, 5, 2, 1],
        4: [2, 3, 4, 5, 1],
        5: [1, 2, 3, 4, 5],
    };
    const scale = {
        1: [1.4, 1.3, 1.2, 1.1, 1],
        2: [1.2, 1.4, 1.2, 1.1, 1],
        3: [1, 1.1, 1.4, 1.1, 1],
        4: [1, 1.1, 1.2, 1.4, 1.2],
        5: [1, 1.1, 1.2, 1.3, 1.4],
    }
    // const heights={
    //     1: [250, 245, 240, 235, 230],
    //     2: [245, 250, 240, 235, 230],
    //     3: [240, 245,250 ,235, 230],
    //     4: [230, 235, 240, 250, 245],
    //     5: [230, 235, 240, 245, 250],
    // }
    // const widths={
    //    1: [40, 39, 38, 37, 36],
    //     2: [39, 40, 38, 37, 36],
    //     3:[39, 38, 40, 37, 36],
    //     4: [36, 37, 38, 40, 39],
    //     5:  [36, 37, 38, 39, 40],
    // }
    // const height=heights[index]
    // const width=widths[index]
    const scaleVal = scale[index]

    const zIndexes = zIndexMap[index];
    console.log(zIndexes)
    arr.forEach((selector, i) => {
        const element = document.querySelector(selector);
        console.log(element)
        if (element) {
            // element.style.zIndex+=zIndexes[i]
            element.style.setProperty('z-index', zIndexes[i]);
            element.style.transform = `scale(${scaleVal[i]})` // Force update
            // element.style.height=`${height[i]}px`
            // element.style.minWidth=`${width[i]}%`
        }
    });
}

// animation 
AOS.init({
    delay: 400,
});


// press page script start


//archive card 
// const allData = {
//     recent:[
//         {
//             id: 1,
//             img: "/images/right-press-card-img01.jpg",
//             text: "PhonePe Introduces Carbon Footprint Tracker for Eco-Conscious Users",
//             dates: "20 January, 2025"
//         },
//         {
//             id: 2,
//             img: "/images/right-press-card-img02.png",
//             text: "PhonePe Launches Micro-Savings Feature to Help Users Save Effortlessly",
//             dates: "12 December, 2024"
//         },
//         {
//             id: 3,
//             img: "/images/right-press-card-img03.png",
//             text: "PhonePe Expands Insurance Coverage to Include Adventure Sports",
//             dates: "07 January, 2025"
//         },
//         {
//             id: 4,
//             img: "/images/right-press-card-img04.png",
//             text: "PhonePe Partners with Local NGOs for Charity Donation Campaigns",
//             dates: "18 November, 2024"
//         },
//         {
//             id: 5,
//             img: "/images/right-press-card-img05.jpg",
//             text: "PhonePe Launches Real-Time Currency Exchange Feature for Travelers",
//             dates: "29 December, 2024"
//         },
//         {
//             id: 6,
//             img: "/images/right-press-card-img06.jpg",
//             text: "PhonePe Brings Integrated Credit Card Bill Payments to Its Platform",
//             dates: "10 January, 2025"
//         }
//     ],
//     month3:[
//         {
//             id: 1,
//             img: "/images/right-press-card-img05.jpg",
//             text: "PhonePe Introduces Zero-Fee UPI Transactions for All Users",
//             dates: "10 January, 2025"
//         },
//         {
//             id: 2,
//             img: "/images/right-press-card-img06.jpg",
//             text: "PhonePe Launches Affordable Health Plans for Senior Citizens",
//             dates: "25 December, 2024"
//         },
//         {
//             id: 3,
//             img: "/images/right-press-card-img07.png",
//             text: "PhonePe Adds Mutual Fund Investments to Its App",
//             dates: "18 November, 2024"
//         },
//         {
//             id: 4,
//             img: "/images/right-press-card-img08.png",
//             text: "PhonePe Partners with Top Retailers for Cashback Offers",
//             dates: "01 January, 2025"
//         },
//         {
//             id: 5,
//             img: "/images/right-press-card-img09.png",
//             text: "PhonePe Launches AI-Based Customer Support System",
//             dates: "30 December, 2024"
//         },
//         {
//             id: 6,
//             img: "/images/right-press-card-img10.png",
//             text: "PhonePe Expands to International Markets Starting with UAE",
//             dates: "15 January, 2025"
//         },
//         {
//             id: 7,
//             img: "/images/right-press-card-img01.jpg",
//             text: "PhonePe Unveils Instant Loan Approval for Small Businesses",
//             dates: "05 December, 2024"
//         }
//     ],
//    month6:[
//     {
//         id: 1,
//         img: "/images/right-press-card-img03.png",
//         text: "PhonePe Launches AI-Driven Personal Finance Assistant for Users",
//         dates: "12 August, 2024"
//     },
//     {
//         id: 2,
//         img: "/images/right-press-card-img02.png",
//         text: "PhonePe Offers Special Discounts on Utility Bill Payments",
//         dates: "25 September, 2024"
//     },
//     {
//         id: 3,
//         img: "/images/right-press-card-img07.png",
//         text: "PhonePe Rolls Out Instant Cashback for UPI Transactions Over ₹500",
//         dates: "10 October, 2024"
//     },
//     {
//         id: 4,
//         img: "/images/right-press-card-img09.png",
//         text: "PhonePe Partners with NGOs to Support Education for Underprivileged Kids",
//         dates: "15 November, 2024"
//     },
//     {
//         id: 5,
//         img: "/images/right-press-card-img04.png",
//         text: "PhonePe Adds Automatic Savings Account Feature for Millennials",
//         dates: "01 December, 2024"
//     },
//     {
//         id: 6,
//         img: "/images/right-press-card-img03.png",
//         text: "PhonePe Unveils New Business Loan Schemes for Small Entrepreneurs",
//         dates: "20 December, 2024"
//     },
//     {
//         id: 7,
//         img: "/images/right-press-card-img07.png",
//         text: "PhonePe Introduces Customizable Insurance Plans for Travelers",
//         dates: "05 September, 2024"
//     },
//     {
//         id: 8,
//         img: "/images/right-press-card-img08.png",
//         text: "PhonePe Rolls Out Faster Payment Options for Online Shoppers",
//         dates: "18 October, 2024"
//     },
//     {
//         id: 9,
//         img: "/images/right-press-card-img01.jpg",
//         text: "PhonePe Adds New Investment Features for Gold and Bonds",
//         dates: "30 November, 2024"
//     },
//     {
//         id: 10,
//         img: "/images/right-press-card-img02.png",
//         text: "PhonePe Launches Digital Wallet for Teenagers to Promote Financial Literacy",
//         dates: "22 August, 2024"
//     },
//     {
//         id: 11,
//         img: "/images/right-press-card-img03.png",
//         text: "PhonePe Offers Zero Processing Fee for Instant Personal Loans",
//         dates: "06 September, 2024"
//     },
//     {
//         id: 12,
//         img: "/images/right-press-card-img06.jpg",
//         text: "PhonePe Introduces Automatic EMI Split for Large Purchases",
//         dates: "12 October, 2024"
//     },
//     {
//         id: 13,
//         img: "/images/right-press-card-img05.jpg",
//         text: "PhonePe Partners with Fitness Apps to Provide Discounts on Memberships",
//         dates: "03 November, 2024"
//     },
//     {
//         id: 14,
//         img: "/images/right-press-card-img01.jpg",
//         text: "PhonePe Unveils QR Code Support for International Payments",
//         dates: "28 December, 2024"
//     }
//    ],
//    yers2020:[
//     {
//         id: 1,
//         img: "/images/right-press-card-img01.jpg",
//         text: "PhonePe Introduces Carbon Footprint Tracker for Eco-Conscious Users",
//         dates: "20 January, 2025"
//     },
//     {
//         id: 2,
//         img: "/images/right-press-card-img02.png",
//         text: "PhonePe Launches Micro-Savings Feature to Help Users Save Effortlessly",
//         dates: "12 December, 2024"
//     },
//     {
//         id: 3,
//         img: "/images/right-press-card-img03.png",
//         text: "PhonePe Expands Insurance Coverage to Include Adventure Sports",
//         dates: "07 January, 2025"
//     },
//     {
//         id: 4,
//         img: "/images/right-press-card-img04.png",
//         text: "PhonePe Partners with Local NGOs for Charity Donation Campaigns",
//         dates: "18 November, 2024"
//     },
//    ],
//    yers2021:[
//     {
//         id: 1,
//         img: "/images/right-press-card-img06.jpg",
//         text: "PhonePe Introduces Automatic EMI Split for Large Purchases",
//         dates: "12 October, 2024"
//     },
//     {
//         id: 2,
//         img: "/images/right-press-card-img05.jpg",
//         text: "PhonePe Partners with Fitness Apps to Provide Discounts on Memberships",
//         dates: "03 November, 2024"
//     },
//     {
//         id: 3,
//         img: "/images/right-press-card-img01.jpg",
//         text: "PhonePe Unveils QR Code Support for International Payments",
//         dates: "28 December, 2024"
//     }
//    ],
//    year2022:[
//     {
//         id: 1,
//         img: "/images/right-press-card-img06.jpg",
//         text: "PhonePe Launches Comprehensive Financial Health Reports",
//         dates: "05 February, 2022"
//     },
//     {
//         id: 2,
//         img: "/images/right-press-card-img05.jpg",
//         text: "PhonePe Introduces Automatic Bill Splitting Among Friends",
//         dates: "12 April, 2022"
//     },
//     {
//         id: 3,
//         img: "/images/right-press-card-img01.jpg",
//         text: "PhonePe Rolls Out New Cashback Schemes for Users",
//         dates: "30 September, 2022"
//     }
//    ],
//    year2023:[
//     {
//         id: 1,
//         img: "/images/right-press-card-img06.jpg",
//         text: "PhonePe Partners with Airlines for Seamless Flight Bookings",
//         dates: "08 March, 2023"
//     },
//     {
//         id: 2,
//         img: "/images/right-press-card-img07.png",
//         text: "PhonePe Adds Travel Insurance Plans for Users",
//         dates: "15 May, 2023"
//     },
//     {
//         id: 3,
//         img: "/images/right-press-card-img01.jpg",
//         text: "PhonePe Introduces Renewable Energy Investment Options",
//         dates: "25 October, 2023"
//     }
//    ],
//    year2024:[
//     {
//         id: 1,
//         img: "/images/right-press-card-img04.png",
//         text: "PhonePe Introduces AI-Powered Investment Recommendations",
//         dates: "12 February, 2024"
//     },
//     {
//         id: 2,
//         img: "/images/right-press-card-img05.jpg",
//         text: "PhonePe Adds Personalized Loan Offers for Students",
//         dates: "05 June, 2024"
//     },
//     {
//         id: 3,
//         img: "/images/right-press-card-img02.png",
//         text: "PhonePe Expands Its Platform with Cryptocurrency Support",
//         dates: "18 November, 2024"
//     }
//    ]
// };

// window.last3MonthCard = [

// ];

// window.last6monthCard = [

// ];

// open or close card container 

function openCardContainer(ids) {
    const cardContainer = document.querySelector(".archiv-card-conatainer") //getting card container
    // const arroId = document.querySelector(ids)
    if (cardContainer.classList.contains("hideCardContainer")) {
        cardContainer.classList.add("showCardContainers")
        cardContainer.classList.remove("hideCardContainer")
    } else if (cardContainer.classList.contains("showCardContainers")) {
        cardContainer.classList.remove("showCardContainers")
        cardContainer.classList.add("hideCardContainer")
    }
}

const allData = {
    // recent data 
    1: {
        id: 1,
        img: "/images/right-press-card-img01.jpg",
        text: "PhonePe Introduces Carbon Footprint Tracker for Eco-Conscious Users",
        dates: "20 January, 2025"
    },
    2: {
        id: 2,
        img: "/images/right-press-card-img02.png",
        text: "PhonePe Launches Micro-Savings Feature to Help Users Save Effortlessly",
        dates: "12 December, 2024"
    },
    3: {
        id: 3,
        img: "/images/right-press-card-img03.png",
        text: "PhonePe Expands Insurance Coverage to Include Adventure Sports",
        dates: "07 January, 2025"
    },
    4: {
        id: 4,
        img: "/images/right-press-card-img04.png",
        text: "PhonePe Partners with Local NGOs for Charity Donation Campaigns",
        dates: "18 November, 2024"
    },
    5: {
        id: 5,
        img: "/images/right-press-card-img05.jpg",
        text: "PhonePe Launches Real-Time Currency Exchange Feature for Travelers",
        dates: "29 December, 2024"
    },
    6: {
        id: 6,
        img: "/images/right-press-card-img06.jpg",
        text: "PhonePe Brings Integrated Credit Card Bill Payments to Its Platform",
        dates: "10 January, 2025"
    },


    //3month data
    7: {
        id: 1,
        img: "/images/right-press-card-img05.jpg",
        text: "PhonePe Introduces Zero-Fee UPI Transactions for All Users",
        dates: "10 January, 2025"
    },
    8: {
        id: 2,
        img: "/images/right-press-card-img06.jpg",
        text: "PhonePe Launches Affordable Health Plans for Senior Citizens",
        dates: "25 December, 2024"
    },
    9: {
        id: 3,
        img: "/images/right-press-card-img07.png",
        text: "PhonePe Adds Mutual Fund Investments to Its App",
        dates: "18 November, 2024"
    },
    10: {
        id: 4,
        img: "/images/right-press-card-img08.png",
        text: "PhonePe Partners with Top Retailers for Cashback Offers",
        dates: "01 January, 2025"
    },
    11: {
        id: 5,
        img: "/images/right-press-card-img09.png",
        text: "PhonePe Launches AI-Based Customer Support System",
        dates: "30 December, 2024"
    },
    12: {
        id: 6,
        img: "/images/right-press-card-img10.png",
        text: "PhonePe Expands to International Markets Starting with UAE",
        dates: "15 January, 2025"
    },
    13: {
        id: 7,
        img: "/images/right-press-card-img01.jpg",
        text: "PhonePe Unveils Instant Loan Approval for Small Businesses",
        dates: "05 December, 2024"
    },

    // 6month data 

    14: {
        id: 1,
        img: "/images/right-press-card-img03.png",
        text: "PhonePe Launches AI-Driven Personal Finance Assistant for Users",
        dates: "12 August, 2024"
    },
    15: {
        id: 2,
        img: "/images/right-press-card-img02.png",
        text: "PhonePe Offers Special Discounts on Utility Bill Payments",
        dates: "25 September, 2024"
    },
    16: {
        id: 3,
        img: "/images/right-press-card-img07.png",
        text: "PhonePe Rolls Out Instant Cashback for UPI Transactions Over ₹500",
        dates: "10 October, 2024"
    },
    17: {
        id: 4,
        img: "/images/right-press-card-img09.png",
        text: "PhonePe Partners with NGOs to Support Education for Underprivileged Kids",
        dates: "15 November, 2024"
    },
    18: {
        id: 5,
        img: "/images/right-press-card-img04.png",
        text: "PhonePe Adds Automatic Savings Account Feature for Millennials",
        dates: "01 December, 2024"
    },
    19: {
        id: 6,
        img: "/images/right-press-card-img03.png",
        text: "PhonePe Unveils New Business Loan Schemes for Small Entrepreneurs",
        dates: "20 December, 2024"
    },
    20: {
        id: 7,
        img: "/images/right-press-card-img07.png",
        text: "PhonePe Introduces Customizable Insurance Plans for Travelers",
        dates: "05 September, 2024"
    },
    21: {
        id: 8,
        img: "/images/right-press-card-img08.png",
        text: "PhonePe Rolls Out Faster Payment Options for Online Shoppers",
        dates: "18 October, 2024"
    },
    22: {
        id: 9,
        img: "/images/right-press-card-img01.jpg",
        text: "PhonePe Adds New Investment Features for Gold and Bonds",
        dates: "30 November, 2024"
    },
    23: {
        id: 10,
        img: "/images/right-press-card-img02.png",
        text: "PhonePe Launches Digital Wallet for Teenagers to Promote Financial Literacy",
        dates: "22 August, 2024"
    },
    24: {
        id: 11,
        img: "/images/right-press-card-img03.png",
        text: "PhonePe Offers Zero Processing Fee for Instant Personal Loans",
        dates: "06 September, 2024"
    },
    25: {
        id: 12,
        img: "/images/right-press-card-img06.jpg",
        text: "PhonePe Introduces Automatic EMI Split for Large Purchases",
        dates: "12 October, 2024"
    },
    26: {
        id: 13,
        img: "/images/right-press-card-img05.jpg",
        text: "PhonePe Partners with Fitness Apps to Provide Discounts on Memberships",
        dates: "03 November, 2024"
    },
    27: {
        id: 14,
        img: "/images/right-press-card-img01.jpg",
        text: "PhonePe Unveils QR Code Support for International Payments",
        dates: "28 December, 2024"
    },
    //    yers2020 data

    28: {
        id: 1,
        img: "/images/right-press-card-img01.jpg",
        text: "PhonePe Introduces Carbon Footprint Tracker for Eco-Conscious Users",
        dates: "20 January, 2025"
    },
    29: {
        id: 2,
        img: "/images/right-press-card-img02.png",
        text: "PhonePe Launches Micro-Savings Feature to Help Users Save Effortlessly",
        dates: "12 December, 2024"
    },
    30: {
        id: 3,
        img: "/images/right-press-card-img03.png",
        text: "PhonePe Expands Insurance Coverage to Include Adventure Sports",
        dates: "07 January, 2025"
    },
    31: {
        id: 4,
        img: "/images/right-press-card-img04.png",
        text: "PhonePe Partners with Local NGOs for Charity Donation Campaigns",
        dates: "18 November, 2024"
    },

    //    yers2021 data 
    32: {
        id: 1,
        img: "/images/right-press-card-img06.jpg",
        text: "PhonePe Introduces Automatic EMI Split for Large Purchases",
        dates: "12 October, 2024"
    },
    33: {
        id: 2,
        img: "/images/right-press-card-img05.jpg",
        text: "PhonePe Partners with Fitness Apps to Provide Discounts on Memberships",
        dates: "03 November, 2024"
    },
    34: {
        id: 3,
        img: "/images/right-press-card-img01.jpg",
        text: "PhonePe Unveils QR Code Support for International Payments",
        dates: "28 December, 2024"
    },

    //    year2022 data 
    35: {
        id: 1,
        img: "/images/right-press-card-img06.jpg",
        text: "PhonePe Launches Comprehensive Financial Health Reports",
        dates: "05 February, 2022"
    },
    36: {
        id: 2,
        img: "/images/right-press-card-img05.jpg",
        text: "PhonePe Introduces Automatic Bill Splitting Among Friends",
        dates: "12 April, 2022"
    },
    37: {
        id: 3,
        img: "/images/right-press-card-img01.jpg",
        text: "PhonePe Rolls Out New Cashback Schemes for Users",
        dates: "30 September, 2022"
    },

    //    year2023 data 
    38: {
        id: 1,
        img: "/images/right-press-card-img06.jpg",
        text: "PhonePe Partners with Airlines for Seamless Flight Bookings",
        dates: "08 March, 2023"
    },
    39: {
        id: 2,
        img: "/images/right-press-card-img07.png",
        text: "PhonePe Adds Travel Insurance Plans for Users",
        dates: "15 May, 2023"
    },
    40: {
        id: 3,
        img: "/images/right-press-card-img01.jpg",
        text: "PhonePe Introduces Renewable Energy Investment Options",
        dates: "25 October, 2023"
    },

    //    year2024 data 
    41: {
        id: 1,
        img: "/images/right-press-card-img04.png",
        text: "PhonePe Introduces AI-Powered Investment Recommendations",
        dates: "12 February, 2024"
    },
    42: {
        id: 2,
        img: "/images/right-press-card-img05.jpg",
        text: "PhonePe Adds Personalized Loan Offers for Students",
        dates: "05 June, 2024"
    },
    43: {
        id: 3,
        img: "/images/right-press-card-img02.png",
        text: "PhonePe Expands Its Platform with Cryptocurrency Support",
        dates: "18 November, 2024"
    }

};

const allDataMapping = {
    recent: [1, 2, 3, 4, 5, 6],
    recentBefore:[1, 2, 3, 4, 5, 6],
    month3: [7, 8, 9, 10, 11, 12, 13],
    month6: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    yers2020: [28, 29, 30, 31],
    yers2021: [32, 33, 34],
    year2022: [35, 36, 37],
    year2023: [38, 39, 40],
    year2024: [41, 42, 43]
}

// show card onlick archive button
const archivCard = document.querySelector(".archivCard");
function showCards(Event,arr,addel) {
    const targetEvent = Event.target;
    const jsonInfo = targetEvent.dataset.jsoninfo;
    const value = jsonInfo ? jsonInfo : targetEvent.value;
    // const recents=document.querySelector(".recent")
    // let classvalu=targetEvent ? targetEvent: recents
    const ele=document.querySelector(addel)
    ele.classList.add("activeBtn")
   arr.forEach((el)=>{
    let element=document.querySelector(el)
    element.classList?.remove("activeBtn")
    // console.log(el)
   })
    // const value=targetEvent.value || targetEvent.dataset.jsoninfo //setvalue from div or selected options   

    Array.from(archivCard.children).forEach(tag => tag.remove());

    const HTML = allDataMapping[value].map(mapping => {
        const { id, img, text, dates } = allData[mapping];
        return `<div class="archi-card1 archiv-card-all gap-3 border d-flex justify-content-center mx-auto mt-1" data-container="${id}" style="background-image:url('${img}'); background-size:cover;">
                        <div class="iteme-arichs" ><p>${text}</p><p clas="text-bottom">${dates}</p></div>
                    </div>` ;

    }).join("");
    archivCard.insertAdjacentHTML("beforeend", HTML);
}

// recent news 
const nonExpandable=document.querySelector(".non-expandalbe-card")
if(nonExpandable){

let content=""
for(let i=1;i<4;i++){
    content+= `
         <div class="col-lg-4 col-md-12 col-sm-12 news-animated-card mt-2" style="background-image:url('${allData[i].img}');" 
                >
                <h5 class="news-animation-text">${allData[i].text}</h5>
                <p>${allData[i].dates}</p>
                </div>
    `
}
nonExpandable.innerHTML=content
}else {
    console.log("errors ")
}

const expandalbe=document.querySelector(".expandable-cards")
if(nonExpandable){

    let content=""
    for(let i=1;i<4;i++){
        content+= `
             <div class="col-lg-4 col-md-12 col-sm-12 news-animated-card mt-2" style="background-image:url('${allData[i].img}');" 
                    >
                    <h5 class="news-animation-text">${allData[i].text}</h5>
                    <p>${allData[i].dates}</p>
                    </div>
        `
    }
    expandalbe.innerHTML=content
    }else {
        console.log("errors ")
    }


    function showMoreCard(expadleEle, arror, text) {
        const ele = document.querySelector(expadleEle);
        const arro = document.querySelector(arror); // This is for rotating the arrow
        const texts = document.querySelector(text);
          if (ele.classList.contains('show-recent-news')) {
            ele.classList.remove('show-recent-news');
            texts.innerText = "Load more";
    
            arro.classList.remove('rotate');
        } else {
            ele.classList.add('show-recent-news');
            texts.innerText = "Less";
            arro.classList.add('rotate');
        }
    }
    