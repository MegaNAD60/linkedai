import { FaCheckCircle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";


function Footer(){

    // MEDIA QUERIES
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 800, maxWidth: 7000})
        return isDesktop ? children : null
    }
    const Phone = ({children}) => {
        const isPhone = useMediaQuery({minWidth: 300, maxWidth: 800})
        return isPhone ? children : null
    }

    // DESKTOP CSS STYLE
    const columnTemplate = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '50px',
        padding: '50px 80px',
    }

    //PHONE CSS STYLE
    const phoneColumnTemplate = {
        display: 'grid',
        gridTemplateColumns: '100%',
        padding: '0 50px',
    }

    return(
        <>
            <Desktop>
                <div className="footer" style={columnTemplate}>

                    <div>
                        <h2>get<span style={{color: '#d434fe'}}>linked</span></h2>
                        <p>
                            Getlinked Tech Hackathon is a technology innovation program established
                            by a group of organizations with the aim of showcasing young and talented
                            individuals in the field of technology
                        </p>
                        <p>Terms of Use <span style={{color: '#d434fe'}}>|</span> Privacy Policy</p>
                    </div>

                    <div style={{marginLeft: '50px'}}>
                        <h3>Useful Links</h3>
                        <ul>
                            <li><FaCheckCircle /> Overview</li>
                            <li><FaCheckCircle /> Timeline</li>
                            <li><FaCheckCircle /> FAQs</li>
                            <li><FaCheckCircle /> Register</li>
                        </ul>
                        <p style={{color: '#d434fe'}}>Follow us:</p><FaFacebookSquare /> <FaTwitterSquare /> <FaLinkedinIn />
                    </div>

                    <div>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Overview</li>
                            <li>Timeline</li>
                            <li>FAQs</li>
                            <li>Register</li>
                        </ul>
                        <p style={{color: '#d434fe'}}>Follow us</p>
                    </div>
                </div>

                <center>
                    <p>All rights reserved. @copy getlinked Ltd.</p>
                </center>
            </Desktop>

            <Phone>
                <div className="footer" style={phoneColumnTemplate}>
                    <div>
                        <h2>get<span style={{color: '#d434fe'}}>linked</span></h2>
                        <p>
                            Getlinked Tech Hackathon is a technology innovation program established
                            by a group of organizations with the aim of showcasing young and talented
                            individuals in the field of technology
                        </p>
                        <p>Terms of Use <span style={{color: '#d434fe'}}>|</span> Privacy Policy</p>
                    </div>
                    <div>
                        <h3>Useful Links</h3>
                        <ul>
                            <li><FaCheckCircle /> Overview</li>
                            <li><FaCheckCircle /> Timeline</li>
                            <li><FaCheckCircle /> FAQs</li>
                            <li><FaCheckCircle /> Register</li>
                        </ul>
                        <p style={{color: '#d434fe'}}>Follow us:</p><FaFacebookSquare /> <FaTwitterSquare /> <FaLinkedinIn />
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Overview</li>
                            <li>Timeline</li>
                            <li>FAQs</li>
                            <li>Register</li>
                        </ul>
                        <p style={{color: '#d434fe'}}>Follow us</p>
                    </div>
                </div>
                <center>
                    <p>All rights reserved. @copy getlinked Ltd.</p>
                </center>
            </Phone>
        </>
    )
}

export default Footer;