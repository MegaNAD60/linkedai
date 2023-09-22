import BigIdea from "../sections/BigIdea";
import Guidelines from "../sections/Guidelines";
import Header from "../sections/Header";
import KeyAttributes from "../sections/KeyAttributes";
import Faq from "../sections/Faq";
import Rewards from "../sections/Rewards";
import Partners from "../sections/Partners";
import PrivacyPolicy from "../sections/PrivacyPolicy";
import Footer from "../sections/Footer";

function Homepage(){

    const resposive = {

    }

    return(
        <>
        <div className='container'>
            <section>
                <Header />
            </section>
        </div><hr />
        <div className='container'>
            <section>
                <BigIdea />
            </section>
        </div><hr/>
        <div className='container'>
            <section>
                <Guidelines />
            </section>
        </div><hr/>
        <div className='container'>
            <section>
                <KeyAttributes />
            </section>
        </div><hr/>
        <div className='container'>
            <section>
                <Faq />
            </section>
        </div><hr />
        <div className='container'>
            <section>
                <Rewards />
            </section>
        </div><hr/>
        <div className='container'>
            <section>
                <Partners />
            </section>
        </div><hr />
        <div className='container'>
            <section>
                <PrivacyPolicy />
            </section>
        </div><hr />
        <div className='container'>
            <section>
                <Footer />
            </section>
        </div>
        </>
    )
}

export default Homepage;