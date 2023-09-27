import BigIdea from "../sections/BigIdea";
import Guidelines from "../sections/Guidelines";
import Header from "../sections/Header";
import KeyAttributes from "../sections/KeyAttributes";
import Faq from "../sections/Faq";
import Rewards from "../sections/Rewards";
import Partners from "../sections/Partners";
import PrivacyPolicy from "../sections/PrivacyPolicy";
import Footer from "../sections/Footer";
import Timeline from "../sections/Timeline";
import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";

function Homepage(){
    //SCROLL TOP BUTTON FUNCTION
    const scrollTop = () => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        })
    }

    //SCROLL TOP BUTTON FUNCTION WHEN BROWSER IS BEING SCROLL
    const [showBtn, setShowBtn] = useState(false);

    const whenScroll = () => {
        if(window.scrollY > 300){
            setShowBtn(true)
        }
        else{
            setShowBtn(false)
        }
    }

    window.addEventListener('scroll', whenScroll)

    return(
        <>
            <button
             onClick={scrollTop}
             onScroll={whenScroll}
             style={{
                display: showBtn ? 'inline' : 'none',
                position: 'fixed',
                right: '30px',
                bottom: '30px',
                padding: '10px',
                borderRadius: '5px',
                color: '#ffffff',
                fontSize: '1.2rem',
                border: 'none',
                backgroundImage: 'linear-gradient(to right, #d434ef, #903aff)'
            }}><FaChevronUp /></button>
            <section>
                <Header />
            </section><hr />
            <section>
                <BigIdea />
            </section><hr />
            <section>
                <Guidelines />
            </section><hr />
            <section>
                <KeyAttributes />
            </section><hr />
            <section>
                <Faq />
            </section><hr />
            <section>
                <Timeline />
            </section><hr />
            <section>
                <Rewards />
            </section><hr />
            <section>
                <Partners />
            </section><hr />
            <section>
                <PrivacyPolicy />
            </section><hr />
            <section>
                <Footer />
            </section><hr />
        </>
    )
}

export default Homepage;