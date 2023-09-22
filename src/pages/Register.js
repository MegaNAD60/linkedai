import Button from '../components/Button';
import Input from '../components/Input';

function Register() {

    //CSS STYLING
    const image = {
        width: '717',
        height: '717'
    }

    return(
        <>
        <div className='container'>
            <div className='register'>
                <img src={require('../images/3d-graphic.png')} alt='partners' style={image} />
                <div className='form-box'>
                    <h2 style={{color: '#d434fe'}}>Register</h2>
                    <p>Be part of the movement...</p>
                    <h2>CREATE YOUR ACCOUNT</h2>
                    <form>
                        <div className='grid-container'>
                            <label htmlFor='name'>Teams Name
                                <Input name='name' id='name' placeholder='Enter the name of your group' />
                            </label>
                            <label htmlFor='phone'>Phone
                                <Input name='phone' id='phone' placeholder='Enter your phone number' />
                            </label>
                        </div>
                        <div className='grid-container'>
                            <label htmlFor='email'>Email
                                <Input name='email' id='email' placeholder='Enter your email address' />
                            </label>
                            <label htmlFor='project-topic'>Project Topic
                                <Input name='project-topic' id='project-topic' placeholder='What is your group project topic' />
                            </label>
                        </div>
                        <div className='grid-container'>
                            <label htmlFor='category'>Category<br/>
                                <select name='category' id='category'>
                                    <option>Select your category</option>
                                </select>
                            </label>
                            <label htmlFor='group'>Group Size<br/>
                                <select name='group' id='group'>
                                    <option>Select</option>
                                </select>
                            </label>
                        </div>
                        <p style={{color: '#d434fe'}}><i>Please review your registration details before submitting</i></p>
                        <div style={{display: 'flex'}}><Input type='checkbox' /><span>I agreed with the event terms and condition and privacy policy</span></div><br/>
                        <Button name='Register Now' style={{width: '100%'}} />
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;