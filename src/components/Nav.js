import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-router-dom"


function Nav(){

    const [nav, setNav] = useState(false)

    const handleVav = () => {
        setNav(!nav)
    }


    return(
        <div className="text-white border-b-2">
            <nav className="flex justify-between max-w-[1240px] mx-auto px-6 py-4">

                <div>
                    <h1 className="font-bold text-3xl"><Link to='/'>get<span className="text-[#d434fe]">linked</span></Link></h1>
                </div>

                <ul className='hidden md:flex justify-between gap-10 items-baseline'>
                    <li><Link to='/'>TimeLine</Link></li>
                    <li>Overview</li>
                    <li>FAQs</li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <Link to='/register'><button className="py-2 px-4 font-medium bg-gradient-to-r from-[#d434ef] to-[#903aff]">Register</button></Link>
                </ul>

                <div className="block md:hidden" onClick={handleVav}>
                    {nav ? <AiOutlineMenu size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <div className={nav ? "fixed left-0 top-0 z-10 w-full h-[70%] p-8 bg-[#150e28] ease-in-out duration-500" : 'fixed top-[-100%]'}>

                    <div className="block md:hidden float-right" onClick={handleVav}>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>

                    <ul className='py-5'>
                        <li className="py-2">TimeLine</li>
                        <li className="py-2">Overview</li>
                        <li className="py-2">FAQs</li>
                        <li className="py-2"><Link to='/contact'>Contact</Link></li>
                        <Link to='/register'><button className="py-2 px-4 font-medium bg-gradient-to-r from-[#d434ef] to-[#903aff]">Register</button></Link>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Nav;