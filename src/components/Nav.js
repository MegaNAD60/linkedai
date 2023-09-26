import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"


function Nav(){

    const [toggleHamburger, setToggleHamburger] = useState(true);
    const [toggleNav, setToggleNav] = useState(false);

    const handleHambuger = () => {
        setToggleHamburger(!toggleHamburger)
        setToggleNav(!toggleNav)
    }

    useEffect(() => {
        if(toggleNav){
            document.body.style.overflow = 'hidden';
        } else{
            document.body.style.overflow = 'unset';
        }
    }, [toggleNav])

    return(
        <>
            <nav className='navbar'>
                <div className='nav-logo'>get<span className='logo-span'>linked</span></div>
                <div className='nav-links'>
                    <ul className={`links ${toggleNav && 'active'}`}>
                        <li><a href="index.js">Timeline</a></li>
                        <li><a href="index.js">Overview</a></li>
                        <li><a href="index.js">FAQs</a></li>
                        <li><Link to='contact'>Contact</Link></li>
                        <li style={{marginLeft: '100px'}}><a href="register" type="button" id="nav-btn">Register</a></li>
                    </ul>
                </div>
                <div className="nav-icons">
                    <span onClick={handleHambuger} className="hamburger">
                    {
                        toggleHamburger ? <FaBars /> : <FaTimes />
                    }
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Nav;