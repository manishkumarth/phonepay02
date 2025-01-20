

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


function hideshowNestedMenu(menuId,arrowIcon,event,trueVal) {
        if(event){
            event.preventDefault()
        }
    const nestedMenu = document.querySelector(menuId)
    const arrowIcons = document.querySelector(arrowIcon)
    if (nestedMenu.style.display === 'none' || nestedMenu.style.display === '') {
        nestedMenu.style.display = 'block'
        if(trueVal===true) {
            arrowIcons.style.transform = 'rotate(180deg)'
        }else{
             arrowIcons.style.transform = 'rotate(0deg)'
        }
    } else if (nestedMenu.style.display === 'block') {
        nestedMenu.style.display = 'none'
        if(trueVal===true){
            arrowIcons.style.transform = 'rotate(0deg)'
        }else{
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
    const scale={
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
    const scaleVal=scale[index]

    const zIndexes = zIndexMap[index];
    console.log(zIndexes)
    arr.forEach((selector, i) => {
        const element = document.querySelector(selector);
        console.log(element)
        if (element) {
            // element.style.zIndex+=zIndexes[i]
            element.style.setProperty('z-index', zIndexes[i]);
            element.style.transform=`scale(${scaleVal[i]})` // Force update
            // element.style.height=`${height[i]}px`
            // element.style.minWidth=`${width[i]}%`
        }
    });
}

// animation 
AOS.init({
    delay:400,
});


// press page script start

//archive card 
const recentCard= [
    {
        id: 1,
        img: "/images/right-press-card-img01.jpg",
        text: "PhonePe Introduces Carbon Footprint Tracker for Eco-Conscious Users",
        dates: "20 January, 2025"
    },
    {
        id: 2,
        img: "/images/right-press-card-img02.png",
        text: "PhonePe Launches Micro-Savings Feature to Help Users Save Effortlessly",
        dates: "12 December, 2024"
    },
    {
        id: 3,
        img: "/images/right-press-card-img03.png",
        text: "PhonePe Expands Insurance Coverage to Include Adventure Sports",
        dates: "07 January, 2025"
    },
    {
        id: 4,
        img: "/images/right-press-card-img04.png",
        text: "PhonePe Partners with Local NGOs for Charity Donation Campaigns",
        dates: "18 November, 2024"
    },
    {
        id: 5,
        img: "/images/right-press-card-img05.jpg",
        text: "PhonePe Launches Real-Time Currency Exchange Feature for Travelers",
        dates: "29 December, 2024"
    },
    {
        id: 6,
        img: "/images/right-press-card-img06.jpg",
        text: "PhonePe Brings Integrated Credit Card Bill Payments to Its Platform",
        dates: "10 January, 2025"
    }
];

    const last3MonthCard = [
        {
            id: 1,
            img: "/images/right-press-card-img05.jpg",
            text: "PhonePe Introduces Zero-Fee UPI Transactions for All Users",
            dates: "10 January, 2025"
        },
        {
            id: 2,
            img: "/images/right-press-card-img06.jpg",
            text: "PhonePe Launches Affordable Health Plans for Senior Citizens",
            dates: "25 December, 2024"
        },
        {
            id: 3,
            img: "/images/right-press-card-img07.png",
            text: "PhonePe Adds Mutual Fund Investments to Its App",
            dates: "18 November, 2024"
        },
        {
            id: 4,
            img: "/images/right-press-card-img08.png",
            text: "PhonePe Partners with Top Retailers for Cashback Offers",
            dates: "01 January, 2025"
        },
        {
            id: 5,
            img: "/images/right-press-card-img09.png",
            text: "PhonePe Launches AI-Based Customer Support System",
            dates: "30 December, 2024"
        },
        {
            id: 6,
            img: "/images/right-press-card-img10.png",
            text: "PhonePe Expands to International Markets Starting with UAE",
            dates: "15 January, 2025"
        },
        {
            id: 7,
            img: "/images/right-press-card-img01.jpg",
            text: "PhonePe Unveils Instant Loan Approval for Small Businesses",
            dates: "05 December, 2024"
        }
    ];

    const last6monthCard = [
        {
            id: 1,
            img: "/images/right-press-card-img03.png",
            text: "PhonePe Launches AI-Driven Personal Finance Assistant for Users",
            dates: "12 August, 2024"
        },
        {
            id: 2,
            img: "/images/right-press-card-img02.png",
            text: "PhonePe Offers Special Discounts on Utility Bill Payments",
            dates: "25 September, 2024"
        },
        {
            id: 3,
            img: "/images/right-press-card-img07.png",
            text: "PhonePe Rolls Out Instant Cashback for UPI Transactions Over ₹500",
            dates: "10 October, 2024"
        },
        {
            id: 4,
            img: "/images/right-press-card-img09.png",
            text: "PhonePe Partners with NGOs to Support Education for Underprivileged Kids",
            dates: "15 November, 2024"
        },
        {
            id: 5,
            img: "/images/right-press-card-img04.png",
            text: "PhonePe Adds Automatic Savings Account Feature for Millennials",
            dates: "01 December, 2024"
        },
        {
            id: 6,
            img: "/images/right-press-card-img03.png",
            text: "PhonePe Unveils New Business Loan Schemes for Small Entrepreneurs",
            dates: "20 December, 2024"
        },
        {
            id: 7,
            img: "/images/right-press-card-img07.png",
            text: "PhonePe Introduces Customizable Insurance Plans for Travelers",
            dates: "05 September, 2024"
        },
        {
            id: 8,
            img: "/images/right-press-card-img08.png",
            text: "PhonePe Rolls Out Faster Payment Options for Online Shoppers",
            dates: "18 October, 2024"
        },
        {
            id: 9,
            img: "/images/right-press-card-img01.jpg",
            text: "PhonePe Adds New Investment Features for Gold and Bonds",
            dates: "30 November, 2024"
        },
        {
            id: 10,
            img: "/images/right-press-card-img02.png",
            text: "PhonePe Launches Digital Wallet for Teenagers to Promote Financial Literacy",
            dates: "22 August, 2024"
        },
        {
            id: 11,
            img: "/images/right-press-card-img03.png",
            text: "PhonePe Offers Zero Processing Fee for Instant Personal Loans",
            dates: "06 September, 2024"
        },
        {
            id: 12,
            img: "/images/right-press-card-img06.jpg",
            text: "PhonePe Introduces Automatic EMI Split for Large Purchases",
            dates: "12 October, 2024"
        },
        {
            id: 13,
            img: "/images/right-press-card-img05.jpg",
            text: "PhonePe Partners with Fitness Apps to Provide Discounts on Memberships",
            dates: "03 November, 2024"
        },
        {
            id: 14,
            img: "/images/right-press-card-img01.jpg",
            text: "PhonePe Unveils QR Code Support for International Payments",
            dates: "28 December, 2024"
        }
    ];
    
    // open or close card container 
    function openCardContainer(id){
        const cardContainer=document.querySelector(".archiv-card-conatainer") //getting card container
        const arroId=document.querySelector(id)
        if(cardContainer.style.display==='none'){
            cardContainer.style.display='block'
        }else if(cardContainer.style.display==='block'){
            cardContainer.style.display='none'
        }
       
    }

    // show card onlick archive button 
function showCards(ID,arr,e){
    let data;
    let i=0
    let ev=e.target
    ev.classList?.remove("activeBtn")
    
    if(ID===1){
        data=recentCard; //recent card object selected 
        console.log("first",data)
        ev.classList.add("activeBtn")
    }else if(ID===2){
        data=last3MonthCard //3 month  card object selected 
        console.log("second",data)
        ev.classList.add("activeBtn")
    }else if(ID===3){
        data=last6monthCard  ////6 month card object selected 
        console.log("Third",data)
        ev.classList.add("activeBtn")
    }
    // let element
    arr.forEach((ele,index)=>{
        let element= document.querySelector(ele)
        if(element.style.backgroundImage){
            element.style.backgroundImage='none'
        }
    

        element.style.backgroundImage=`url(${data[index].img})`
        element.style.backgroundSize='cover'
        // element.setAttribute("id",data[index].id) //set data attribute
        let outchild=element.children[0]
        let innerchild=outchild.children[0].innerText=`${data[index].text}`
        let innerchild2=outchild.children[1].innerText=`${data[index].dates}`
        
           console.log(element,[index])
    })
}