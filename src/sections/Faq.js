import FaqItems from '../components/FaqItems';
import faq from '../images/cwok_casual_21.png'


function Faq(){

    return(
        <div>

            <div className='max-w-[1240px] md:grid md:grid-cols-2 lg:gap-10 mx-auto px-6 py-10'>
                <div>
                    <FaqItems />
                </div>
                <img src={faq} alt='faq' className='w-[500px]' />
            </div>

        </div>

    )
}

export default Faq;