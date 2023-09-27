import Button from '../components/Button';
import Input from '../components/Input';
import { useState } from 'react';
import { Desktop, Phone } from '../components/MediaQueries';

const Overlay = ({isOpen, children}) => {
    return(
        <>
            {
                isOpen ? (
                    <div>
                        <div className='overlay_background'>
                            <div className='over_container'>
                                {children}
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

function Register() {

    const [showModal, setShowModal] = useState(false);




    return(
        <>
            <Overlay
                isOpen={showModal}
                onClose={() => setShowModal(!showModal)}
            >
                <div>Modal body</div>
            </Overlay>
            <Desktop>
                <div
                 className='register'
                 style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    padding: '50px'
                 }}>
                    <img
                    src={require('../images/3d-graphic.png')}
                    alt='partners'
                    style={{
                        width: '717px',
                        height: '717px'}} />

                    <div
                     className='form-box'
                     style={{}}>
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
                            <Button onClick={() => setShowModal(!showModal)} name='Register Now' style={{width: '100%'}} />
                        </form>
                    </div>
                </div>
            </Desktop>

            <Phone>
                <div
                 className='register'
                 style={{
                    display: 'grid',
                    gridTemplateColumns: '100%',
                    padding: '20px'
                 }}>
                    <img
                        src={require('../images/3d-graphic.png')}
                        alt='partners'
                        style={{
                            width: '317px',
                            height: '317px'}}
                    />

                    <div
                     className='form-box'
                     style={{
                        padding: '15px',
                     }}>
                        <h2 style={{color: '#d434fe'}}>Register</h2>
                        <p>Be part of the movement...</p>
                        <h2>CREATE YOUR ACCOUNT</h2>
                        <form>
                            <div
                             className='grid-container'
                             style={{
                                display: 'grid',
                                gridTemplateColumns: '100%',
                                gap: '20px',
                             }}>
                                <label htmlFor='name'>Teams Name
                                    <Input name='name' id='name' placeholder='Enter the name of your group' />
                                </label>
                                <label htmlFor='phone'>Phone
                                    <Input name='phone' id='phone' placeholder='Enter your phone number' />
                                </label>
                            </div>

                            <div
                             className='grid-container'
                             style={{
                                display: 'grid',
                                gridTemplateColumns: '100%',
                                gap: '20px',
                             }}>
                                <label htmlFor='email'>Email
                                    <Input name='email' id='email' placeholder='Enter your email address' />
                                </label>
                                <label htmlFor='project-topic'>Project Topic
                                    <Input name='project-topic' id='project-topic' placeholder='What is your group project topic' />
                                </label>
                            </div>

                            <div
                             className='grid-container'
                             style={{
                                display: 'grid',
                                gridTemplateColumns: '100%',
                                gap: '20px',
                             }}>
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
            </Phone>
        </>
    )
}

export default Register;