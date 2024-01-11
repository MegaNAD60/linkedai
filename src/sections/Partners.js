import partners from '../images/partners.png'
import star from '../images/star_pu.png'

function Partners(){

    return(
        <div>
            <div className='max-w-[1240px] mx-auto py-16 px-6 text-center'>
                <h2 className='font-medium text-2xl'>Partners and Sponsors</h2>
                <p className='py-4'>
                    Getlinked Hackathon 1.0 is honored to have the following<br/>
                    major companies as its partners and sponsors
                </p>
                <img src={star} alt='/' className='w-[15px] ml-10 md:ml-40' />
                <img src={partners} alt='/' className='w-[1000px] mx-auto mt-4' />
            </div>
        </div>
    )
}

export default Partners;