import {
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaFacebook,
    FaPhone,
    FaLocationArrow
} from "react-icons/fa";



function Footer(){

    return(
        <div>
            <div className="max-w-[1240px] mx-auto md:grid md:grid-cols-3 gap-10 py-10 px-6">

                    <div>
                        <h2 className="font-bold text-2xl">get<span className="text-[#d434fe]">linked</span></h2>
                        <p className="py-2 text-sm">
                            Getlinked Tech Hackathon is a technology innovation program established
                            by a group of organizations with the aim of showcasing young and talented
                            individuals in the field of technology
                        </p>
                        <p className="mt-10">Terms of Use <span className="text-[#d434fe]">|</span> Privacy Policy</p>
                    </div>

                    <div>
                        <h3 className="text-[#d434fe]">Useful Links</h3>
                        <ul className="leading-10">
                            <li>Overview</li>
                            <li>Timeline</li>
                            <li>FAQs</li>
                            <li>Register</li>
                        </ul>
                        <span className="flex gap-3">
                            <p className="text-[#d434fe]">Follow us:</p>
                            <FaInstagram size={25} />
                            <FaFacebook size={25} />
                            <FaTwitter size={25} />
                            <FaLinkedinIn size={25} />
                        </span>
                    </div>

                    <div>
                        <h3 className="text-[#d434fe]">Contact Us</h3>
                        <span className="flex gap-5 mt-5">
                            <FaPhone />
                            <p>+234 6707653444</p>
                        </span>
                        <span className="flex gap-5 mt-5">
                            <FaLocationArrow />
                            <p>27, Alara Street<br />Yaba 100012<br />Lagos State</p>
                        </span>
                    </div>

            </div>


            <div className="text-center pb-5">
                <p>All rights reserved. @copy getlinked Ltd.</p>
            </div>

        </div>
    )
}

export default Footer;