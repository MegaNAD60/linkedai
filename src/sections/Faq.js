import { FaPlus } from 'react-icons/fa';
import FaqItems from '../components/FaqItems';
import { Desktop, Phone } from '../components/MediaQueries';

function Faq(){

    //DESKOP CSS STYLE
    const faq = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        padding: '0 120px'
    }

    const image = {
        height: '641px',
        width: '641px',
    }

    // PHONE CSS STYLE
    const phoneFaq = {
        display: 'grid',
        gridTemplateColumns: '100%',
        padding: '0 50px'
    }

    const phoneImage = {
        height: '400px',
        width: '100%',
    }

    return(
        <>
            <Desktop>
                <div style={faq}>
                    <div>
                        <FaqItems />
                    </div>
                    <img src={require('../images/cwok_casual_21.png')} alt='faq' style={image} />
                </div>
            </Desktop>

            <Phone>
                <div style={phoneFaq}>
                    <div>
                        <h2>Frequently Ask<br/><span style={{color: '#d434fe'}}>Question</span></h2>
                        <p>We got answers to the question that you might want to ask about getlinked Hackathon 1.0</p>

                        <div style={{ borderBottom: '1px solid #d434fe'}}>
                            <p>Can I work on a project I started before the hackathon?<span style={{color: '#d434fe', float: 'right'}}><FaPlus /></span></p>
                        </div>

                        <div style={{ borderBottom: '1px solid #d434fe'}}>
                            <p>Can I work on a project I started before the hackathon?<span style={{color: '#d434fe', float: 'right'}}><FaPlus /></span></p>
                        </div>

                        <div style={{ borderBottom: '1px solid #d434fe'}}>
                            <p>Can I work on a project I started before the hackathon?<span style={{color: '#d434fe', float: 'right'}}><FaPlus /></span></p>
                        </div>

                        <div style={{ borderBottom: '1px solid #d434fe'}}>
                            <p>Can I work on a project I started before the hackathon?<span style={{color: '#d434fe', float: 'right'}}><FaPlus /></span></p>
                        </div>

                    </div>
                    <img src={require('../images/cwok_casual_21.png')} alt='faq' style={phoneImage} />
                </div>
            </Phone>

        </>
    )
}

export default Faq;