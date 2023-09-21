import BigIdea from "../sections/BigIdea";
import Guidelines from "../sections/Guidelines";
import Header from "../sections/Header";
import KeyAttributes from "../sections/KeyAttributes";
import Nav from "../components/Nav";
import Faq from "../sections/Faq";
import Rewards from "../sections/Rewards";
import Partners from "../sections/Partners";
import PrivacyPolicy from "../sections/PrivacyPolicy";
import Footer from "../sections/Footer";

function Homepage(){
    return(
        <>
        <div className='container'>
            <Nav />
                <section>
                    <Header />
                </section>
                <section>
                    <BigIdea />
                </section>
                <section>
                    <Guidelines />
                </section>
                <section>
                    <KeyAttributes />
                </section>
                <section>
                    <Faq />
                </section>
                <section>
                    <Rewards />
                </section>
                <section>
                    <Partners />
                </section>
                <section>
                    <PrivacyPolicy />
                </section>
                <section>
                    <Footer />
                </section>
        </div>
        </>
    )
}

export default Homepage;