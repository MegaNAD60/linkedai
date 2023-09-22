import Button from '../components/Button';
import Input from '../components/Input';


function Contact(){
    return(
        <>
            <div className='container'>
                <div className='contact'>

                    <div>
                        <h2 style={{color: '#d434fe'}}>GET IN TOUCH</h2>
                        <p>Contact<br/>Information</p>
                        <p>27, Alara Street<br/>Yaba 100012<br/>Lagos State</p>
                        <p>Call Us 07067981819</p>
                        <p>We are open from Monday-Friday<br/>08:00am - 05:00pm</p>
                        <p style={{color: '#d434fe'}}>Share on<br/></p>
                    </div>

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
                                    <textarea name='message' id='message' type='text-area' placeholder='Message' />
                                </label><br/>
                                <center>
                                    <Button name='Submit' />
                                </center>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;