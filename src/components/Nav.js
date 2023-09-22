import Button from "./Button";
import { Link } from "react-router-dom"

function Nav(){


    return(
        <>
            <nav className='navbar'>
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
                <div class="nav-icons">
                    <span class="modebtn"><i class="fa fa-moon">btn</i></span>
                    <span class="hamburger"><i class="fa fa-bars"></i></span>
                </div>

            </nav>
        </>
    )
}

export default Nav;