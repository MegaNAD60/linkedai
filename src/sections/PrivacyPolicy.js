import Button from '../components/Button';
import { FaCheck } from 'react-icons/fa';

import vector from '../images/Vector.png'
import privacy from '../images/privacy.png'


function PrivacyPolicy(){

    return(
        <div>
            <div className='max-w-[1240px] md:grid md:grid-cols-2 gap-10 mx-auto px-6 py-16'>

                <div>

                    <div>
                        <h2 className='font-medium text-2xl'>Privacy Policy and<br/><span className='text-[#d434fe]'>Terms</span></h2>
                        <p className='py-4'>Last updated on September 12, 2023</p>
                        <p>
                            Below are our privacy, which outline a lot of goodies.<br/> Its our aim to always
                            take of our participant.
                        </p>
                    </div>

                    <div className='mt-6 border border-[#d434fe] p-10 rounded-sm'>
                        <p>
                            At getlinked tech Hackathon 1.0, we value your privacy<br/> and are committed to protecting
                            your personal information.<br/> This Privacy Policy outlines how we collect, use, disclose,<br/>
                            and safeguard your data when you particapate in our tech<br/> hackathon event. By participating
                            in our event, you consent<br/> to the practices described in this policy.
                        </p>
                        <h3 className='font-medium text-[#d434fe] mt-4'>Licensing Policy</h3>
                        <p className='py-2'>Here are some of our standard licence:</p>
                        <ul className='mt-2'>
                            <li className='flex gap-5 items-baseline'>
                                <div className='w-[25px] h-[15px] pt-[3px] pl-[3px] text-center rounded-full bg-green-400'><FaCheck size={10} /></div>
                                <p>The standard license grant you a non-exclusive right to navigate and register for our event</p>
                            </li>
                            <li className='flex gap-5 items-baseline mt-4'>
                            <div className='w-[25px] h-[15px] pt-[3px] pl-[3px] text-center rounded-full bg-green-400'><FaCheck size={10} /></div>
                                <p>You are licensed to use the item available at any free source sites, for your project development</p>
                            </li>
                        </ul>
                        <center>
                            <Button name='Read More' />
                        </center>
                    </div>

                </div>

                <div className=''>
                    <img src={vector} alt='/' />
                    <img src={privacy} alt='/' className='mt-[-500px]' />
                </div>
            </div>

        </div>
    )
}

export default PrivacyPolicy;