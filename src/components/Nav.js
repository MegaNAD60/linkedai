import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive";

function Nav(){

    // MEDIA QUERIES
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 600, maxWidth: 7000})
        return isDesktop ? children : null
    }
    const Phone = ({children}) => {
        const isPhone = useMediaQuery({minWidth: 300, maxWidth: 600})
        return isPhone ? children : null
    }

    //DESKTOP CSS STYLE
    const navbar = {
        padding: '20px 100px'
    }

    //PHONE CSS STYLE
    const phoneNavbar = {
        padding: '20px 50px'
    }

    const handleHambuger = () =>{
        console.log('navbar')
    }


    return(
        <>
            <Desktop>
                <nav className='navbar' style={navbar}>
                    <div className='nav-logo'>get<span className='logo-span'>linked</span></div>
                    <div className='nav-links'>
                        <ul className="links">
                            <li>Timeline</li>
                            <li>Overview</li>
                            <li>FAQs</li>
                            <li><Link to='contact'>Contact</Link></li>
                            <li style={{marginLeft: '100px'}}><a href="register" type="button" id="nav-btn">Register</a></li>
                        </ul>
                    </div>
                </nav>
            </Desktop>

            <Phone>
                <nav className='navbar' style={phoneNavbar}>
                    <div className='nav-logo'>get<span className='logo-span'>linked</span></div>
                    <div className="nav-icons">
                        <span onClick={handleHambuger} className="hamburger"><FaBars /></span>
                    </div>

                </nav>
            </Phone>
        </>
    )
}

export default Nav;