

import SiteDataContext from "./siteDataContext";

const SiteState = (props) => {


    // **************************
    // *** ABOUT US PAGE DATA ***
    // **************************

    const cardData = [
        { title: "Our Offerings", des: "We provide tailored strategies that play to your strengths and work on your weaknesses. Our courses are priced affordably, ensuring that quality education is accessible to all" },
        { title: "Our Support", des: "We believe in supporting our students round the clock. Our team is available 24x7 to assist you on your learning journey" },
        { title: "Our Philosophy", des: "Quality over quantity - that’s our mantra. We strive to deliver the best educational experience rather than focusing on the number of courses or students. " }
    ];

    // **************************
    // *** COURSES PAGE DATA ***
    // **************************
    const courses =
        [
            {
                "courseType": "NEET COURSE",
                "price": "₹95,000",
                "courseTitle": "One Year NEET Course",
                "description": "Embark on a year-long journey with us to master NEET. This comprehensive course covers Biology, Chemistry, and Physics, tailored to your unique learning style."
            },
            {
                "courseType": "NEET COURSE",
                "price": "₹1,90,000",
                "courseTitle": "Two Year NEET Course",
                "description": "Our two-year NEET program is designed for students in 11th or 12th grade. It's a perfect blend of in-depth knowledge and strong foundational skills."
            },
            {
                "courseType": "NEET CRASH COURSE",
                "price": "₹40,000",
                "courseTitle": "Four Month Crash Course",
                "description": "Boost your NEET preparation with our four-month crash course. It's designed to maximize your scores and confidence in the final stretch."
            },
            {
                "courseType": "Biology Special",
                "price": "₹35,000/yr",
                "courseTitle": "Biology NEET",
                "description": "Our Biology NEET course is a deep dive into 11th and 12th grade biology. With over 4000 NCERT-based questions, it's your ticket to a high NEET score."
            },
            {
                "courseType": "Chemistry Special",
                "price": "₹35,000/yr",
                "courseTitle": "Chemistry NEET",
                "description": "Our Chemistry NEET course is your guide to mastering 11th and 12th grade chemistry. With 4000+ NCERT-based questions, you'll be well-prepared for NEET."
            },
            {
                "courseType": "Physics Special",
                "price": "₹35,000/yr",
                "courseTitle": "Physics NEET",
                "description": "Our Physics NEET course takes you through 11th and 12th grade physics with over 4000 NCERT-based questions. It's your pathway to a great NEET score."
            }
        ]

    // **************************
    // *** STUDENTS PAGE DATA ***
    // **************************

    const studentData = [
        {
            name: "Renu Bala (MBBS)",
            img: "renu_bala",
            description: "Renu’s grasp of NEET material is exceptional, a testament to V.S. Sehrawat Institute’s rigorous training.",
            review: "Thanks to V.S. Sehrawat Institute, my NEET prep was top-notch, and I’m confident about my medical college journey!"
        },
        {
            name: "Akil Khan (MBBS)",
            img: "akil_khan",
            description: "Akil's dedication to his MBBS studies at V.S. Sehrawat Institute is noteworthy.",
        },
        {
            name: "Rohan (MBBS)",
            img: "rohan",
            description: "Rohan's commitment to his MBBS studies at V.S. Sehrawat Institute is admirable.",
            review: "V.S. Sehrawat Institute's coaching has been pivotal in my MBBS journey!"
        },
        {
            name: "Vishnu (BAMS)",
            img: "vishnu",
            description: "Vishnu’s NEET scores reflect the high-quality coaching provided at V.S. Sehrawat Institute.",
            review: "The NEET coaching at V.S. Sehrawat Institute was unparalleled. It truly honed my test-taking strategies."
        },
        {
            name: "Sonam (BAMS)",
            img: "sonam",
            description: "Sonam’s NEET preparation at V.S. Sehrawat Institute has been thorough, leaving no stone unturned.",
            review: "I owe my thorough NEET preparation to the dedicated faculty at V.S. Sehrawat Institute. Couldn’t have done it without them!"
        },
        {
            name: "Tinku (BAMS)",
            img: "tinku",
            description: "Tinku’s dedication to NEET studies at V.S. Sehrawat Institute is evident in his impressive performance.",
            review: "The rigorous NEET practice sessions at V.S. Sehrawat Institute paid off. I’m ready for college!"
        },
        {
            name: "Nishant (BAMS)",
            img: "nishant",
            description: "Nishant’s NEET results are a clear indicator of the effective teaching strategies at V.S. Sehrawat Institute.",
            review: "Achieving great NEET scores was a dream that V.S. Sehrawat Institute helped me realize. Grateful for the guidance!"
        },
    ]

    return (
        <SiteDataContext.Provider value={{ cardData, courses, studentData }}>
            {props.children}
        </SiteDataContext.Provider>
    )
}

export default SiteState;