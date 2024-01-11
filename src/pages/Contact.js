import Button from '../components/Button';
import Input from '../components/Input';
import { FaLinkedinIn, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


function Contact(){

    return(
        <div>
            <div className='max-w-[1240px] mx-auto py-16 px-20 md:grid md:grid-cols-2 gap-10'>

                <div className='hidden md:block'>
                    <h2 className='text-[#d434fe] font-bold text-2xl'>GET IN TOUCH</h2>
                    <p className='my-4'>Contact<br/>Information</p>
                    <p className='my-4'>27, Alara Street<br/>Yaba 100012<br/>Lagos State</p>
                    <p className='my-4'>Call Us 07067981819</p>
                    <p className='my-4'>We are open from Monday-Friday<br/>08:00am - 05:00pm</p>
                    <p className='text-[#d434fe] '>Share on</p>
                    <span className='flex gap-5 mt-1'>
                        <FaInstagram size={20} />
                        <FaTwitter size={20} />
                        <FaFacebook size={20} />
                        <FaLinkedinIn size={20} />
                    </span>
                </div>

                <div className='md:p-5 md:bg-[rgba(35,18,39,0.5)]'>
                    <p className='text-[#d434fe] font-medium'>Questions or need assistance?</p>
                    <p className='text-[#d434fe] font-medium'>Let us know about it</p>
                    <p className='md:hidden text-sm py-4'>Email us below to any Question related to our event</p>
                    <form>
                        <Input name='name' id='name' placeholder='Name' />
                        <Input name='mail' id='mail' placeholder='Mail' />
                        <textarea className='w-full h-32 p-4 mt-6 bg-transparent border border-white' placeholder='Message' />
                        <div className='w-full text-center my-4'>
                            <Button name='Submit' />
                        </div>
                        <div className='md:hidden my-4 text-center'>
                            <p className='text-[#d434fe] '>Share on</p>
                            <div className='flex gap-5 px-16 mt-1 text-center'>
                                <FaInstagram size={20} />
                                <FaTwitter size={20} />
                                <FaFacebook size={20} />
                                <FaLinkedinIn size={20} />
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact;