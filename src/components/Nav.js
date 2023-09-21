import Button from "./Button";

function Nav(){


    return(
        <>
            <nav className='navbar'>
                <div className='nav-logo'>get<span className='logo-span'>linked</span></div>
                <div className='nav-links'>
                    <ul>
                        <li>Timeline</li>
                        <li>Overview</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                    <div className='nav-btn'>
                        <Button name='Register' />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;