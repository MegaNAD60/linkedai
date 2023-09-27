import Button from '../components/Button';
import Input from '../components/Input';
import { Desktop, Phone } from '../components/MediaQueries';
import { FaLinkedinIn, FaTwitterSquare, FaFacebook, FaInstagram } from 'react-icons/fa';


function Contact(){

    return(
        <>
            <Desktop>
                <div
                 className='contact'
                 style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    padding: '120px 150px',
                 }}>

                    <div>
                        <h2 style={{color: '#d434fe'}}>GET IN TOUCH</h2>
                        <p>Contact<br/>Information</p>
                        <p>27, Alara Street<br/>Yaba 100012<br/>Lagos State</p>
                        <p>Call Us 07067981819</p>
                        <p>We are open from Monday-Friday<br/>08:00am - 05:00pm</p>
                        <p style={{color: '#d434fe'}}>Share on</p>
                        <FaInstagram style={{width: '25px', height: '25px', marginLeft: '10px'}} />
                        <FaFacebook style={{width: '25px', height: '25px', marginLeft: '10px'}} />
                        <FaTwitterSquare style={{width: '25px', height: '25px', marginLeft: '10px'}} />
                        <FaLinkedinIn style={{width: '25px', height: '25px', marginLeft: '10px'}} />                    </div>

                    <div className='form-box'>
                        <h2 style={{color: '#d434fe'}}>Register</h2>
                        <p style={{color: '#d434fe'}}>Questions or need assistance?<br/> Let us know about it</p>
                        <form>
                            <label htmlFor='name'>Teams Name
                                <Input name='name' id='name' placeholder='Name' />
                            </label><br/>
                            <label htmlFor='mail'>Phone
                                <Input name='mail' id='mail' placeholder='Mail' />
                            </label><br/>
                            <label htmlFor='message'>Message
                                    <textarea
                                     name='message'
                                     id='message'
                                     type='text-area'
                                     placeholder='Message'
                                     style={{
                                        width: '90%',
                                        height: '80px',
                                        padding: '15px',
                                        border: '1px solid #ffffff',
                                        backgroundColor: '#903aff1a',
                                     }} />
                                </label><br/>
                            <center>
                                <Button name='Submit' />
                            </center>
                        </form>
                    </div>
                </div>

            </Desktop>

            <Phone>
                <div
                 className='contact'
                 style={{
                    display: 'grid',
                    gridTemplateColumns: '100%',
                    padding: '30px',
                 }}>


                    <div>
                        <h2 style={{color: '#d434fe'}}>Register</h2>
                        <p style={{color: '#d434fe'}}>Questions or need assistance?<br/> Let us know about it</p>
                        <form>
                                <label htmlFor='name'>Teams Name
                                    <Input name='name' id='name' placeholder='Name' />
                                </label><br/>
                                <label htmlFor='mail'>Phone
                                    <Input name='mail' id='mail' placeholder='Mail' />
                                </label><br/>
                                <label htmlFor='message'>Message
                                    <textarea
                                     name='message'
                                     id='message'
                                     type='text-area'
                                     placeholder='Message'
                                     style={{
                                        width: '90%',
                                        height: '80px',
                                        padding: '15px',
                                        border: '1px solid #ffffff',
                                        backgroundColor: '#903aff1a',
                                     }} />
                                </label><br/>
                                <center>
                                    <Button
                                     name='Submit'
                                     />
                                    <p style={{color: '#d434fe'}}>Share on<br/></p>
                                    <FaInstagram style={{width: '20px', height: '20px', marginLeft: '10px'}} />
                                    <FaFacebook style={{width: '20px', height: '20px', marginLeft: '10px'}} />
                                    <FaTwitterSquare style={{width: '20px', height: '20px', marginLeft: '10px'}} />
                                    <FaLinkedinIn style={{width: '20px', height: '20px', marginLeft: '10px'}} />
                                </center>

                        </form>
                    </div>
                </div>

            </Phone>
        </>
    )
}

export default Contact;