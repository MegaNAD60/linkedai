import Button from '../components/Button';

// IMPORT AOS ANIMATION LIBRARY
import AOS from 'aos';
import 'aos/dist/aos.css'

// IMPORT HOOKS
import { useEffect } from 'react';

// IMPORT IMAGES
import star from '../images/star.png'
import title from '../images/Title.png'
import man from '../images/man-wearing-smart-glasses-touching-virtual-screen.png'
import image from '../images/Image.png'

function Header(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(
        <div className='text-white'>

            <div className='max-w-[1240px] mx-auto px-6 py-20'>
                <div className='md:ml-[70%]'>
                    <h3 className='relative right-0'>Igniting a Revolution in HR innovation
                        <div style={{
                                position: 'absolute',
                                marginTop: '5px',
                                width: '200px',
                                height: '100px',
                                left: '100px',
                                border: 'solid 5px #d434ef',
                                borderColor: '#d434ef transparent transparent transparent',
                                borderRadius: '80%/50px 50px 0 0',
                            }}></div>
                    </h3>
                </div>
                <div className='md:grid md:grid-cols-2 gap-10'>
                    <div data-aos="fade-up">
                        <img src={star} alt='star' /> <br/>
                        <img src={title} alt='title' />
                        <p className='py-4'>Participate in getlinked tech Hackathon 2023 stand a chance to win a big price</p>
                        <Button name='Register' />
                        <h2 className='mt-4'>00<small style={{fontSize: '0.8rem'}}>H</small> 00<small style={{fontSize: '0.8rem'}}>M</small> 00<small style={{fontSize: '0.8rem'}}>S</small></h2>
                    </div>

                    <div>

                        <div className='mt-20'>
                            <div className='relative'>
                                <img src={man} alt='man' />
                                <img src={image} alt='' className='absolute top-3' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;