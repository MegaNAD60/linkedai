import Button from '../components/Button';
import Input from '../components/Input';
import image from '../images/3d-graphic.png'
import { useState } from 'react';
import * as Yup from 'yup';
 import { useFormik } from 'formik'
 import { Overlay } from '../components/Overlay';





function Register() {

    const [overlayOpen, setOverlayOpen] = useState(false)

/*    const formik = ({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            project_topic: ''
        },
        onSubmit: function(values){
            alert(`You are registered!`)
        }
    })

    const [showModal, setShowModal] = useState(false);


*/


    return(
        <>
            {/*<Overlay
                isOpen={showModal}
                onClose={() => setShowModal(!showModal)}
            >
                <div>Modal body</div>
            </Overlay>*/}
            <div>
                <div className='max-w-[1240px] mx-auto px-6 py-16 md:grid md:grid-cols-3 lg:grid-cols-2 gap-5'>

                    <img src={image} alt='' className='md:mt-10 lg:mt-0' />

                    <div className='md:col-span-2 lg:col-span-1 p-10 bg-[rgba(35,18,39,0.5)]'>
                        <h2 className='text-[#d434fe] font-medium text-2xl'>Register</h2>
                        <p className='py-4 mt-2'>Be part of the movement...</p>
                        <h2 className='text-2xl'>CREATE YOUR ACCOUNT</h2>

                        <form>

                            <div className='md:grid md:grid-cols-2 gap-5'>
                                <label htmlFor='name'>Teams Name
                                    <Input
                                     name='name'
                                     id='name'
                                     placeholder='Enter the name of your group'
                                     onChange={{/*formik.handleChange*/}}
                                     value={{/*formik.values.name*/}}
                                     helperText={{/*formik.errors.name ? formik.errors.name : ""*/}}
                                    />
                                </label>
                                <label htmlFor='phone'>Phone
                                    <Input name='phone' id='phone' placeholder='Enter your phone number' />
                                </label>
                            </div>

                            <div className='md:grid md:grid-cols-2 gap-5'>
                                <label htmlFor='email'>Email
                                    <Input name='email' id='email' placeholder='Enter your email address' />
                                </label>
                                <label htmlFor='project-topic'>Project Topic
                                    <Input name='project-topic' id='project-topic' placeholder='What is your group project topic' />
                                </label>
                            </div>

                            <div className='md:grid md:grid-cols-2 gap-5'>
                                <label htmlFor='category'>Category<br/>
                                    <select className='w-full p-4 bg-transparent border border-white mt-6' name='category' id='category'>
                                        <option>Select your category</option>
                                    </select>
                                </label>
                                <label htmlFor='group'>Group Size<br/>
                                    <select className='w-full p-4 bg-transparent border border-white mt-6' name='group' id='group'>
                                        <option>Select</option>
                                    </select>
                                </label>
                            </div>

                            <p className='text-[#d434fe] py-4'>
                                <i>Please review your registration details before submitting</i>
                            </p>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='bg-transparent' />
                                <span>I agreed with the event terms and condition and privacy policy</span>
                            </div>
                        </form>
                        <button onClick={() => setOverlayOpen(!overlayOpen)} className='w-full py-2 mt-4 text-white bg-gradient-to-r from-[#d434ef] to-[#903aff]'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <Overlay isOpen={overlayOpen} onClose={() => setOverlayOpen(!overlayOpen)}>
                <div className='text-black'>Hello overlay</div>
            </Overlay>
        </>
    )
}

export default Register;