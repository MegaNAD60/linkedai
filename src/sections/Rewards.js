import rewards from '../images/rewards1.png'
import rewards2 from '../images/Rewards.png'
import star from '../images/star_pu.png'
import star2 from '../images/star.png'

function Rewards(){

    return(
        <div>

            <div className='max-w-[1240px] mx-auto px-6 py-16'>

                <div className='mt-6 md:ml-[50%] text-center md:text-left'>
                    <h2 className='font-medium text-2xl'>Prizes and<br/><span className='text-[#d434fe]'>Rewards</span></h2>
                    <p className='py-4'>Highlight of the prizes or rewards for winners and for participants.</p>
                </div>

                <div className='md:grid md:grid-cols-2 gap-10'>
                    <div>
                        <img src={star} alt='/' className='mt-[-80px] w-[15px]' />
                        <img src={rewards} alt='rewards1' className='mt-20' />
                    </div>
                    <div className='mt-2 md:mt-0'>
                        <img src={star2} alt='/' className='w-[15px]' />
                        <img src={rewards2} alt='rewards2' className='mt-2' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Rewards;