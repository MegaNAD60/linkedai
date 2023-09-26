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

function Homepage(){

    return(
        <>
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