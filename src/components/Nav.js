import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom"

function Nav(){

    const navbar = {
        padding: '20px 100px'
    }


    return(
        <>
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
                <div class="nav-icons">
                    <span class="hamburger"><FaBars /></span>
                </div>

            </nav>
        </>
    )
}

export default Nav;