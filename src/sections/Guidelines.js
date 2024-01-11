import rules from '../images/rules.png'

function Guidelines(){

    return(
        <div>
            <div className='max-w-[1240px] md:grid md:grid-cols-2 gap-10 mx-auto py-10 px-6'>

                <img src={rules} alt='guidelines' className='mt-10 md:mt-0 order-last' />

                <div className='md:mt-10'>
                    <h2 className='font-medium md:text-3xl sm:text-2xl text-xl'>Rules and <br/><span style={{color: '#d434fe'}}>Guidelines</span></h2>
                    <p className='mt-4 lg:leading-10'>Our tech hackathon is a melting point of visionaries, and its purpose is as clear
                    as day: to shape the future. Whether you're a coding genius, a design maverick, or a
                    concept wizard, you'll have the chance to transform your ideas into reality. Solving
                    real-world problems, pushing the boundaries of technology, and creating solutions
                    that can change the world, that's what we're all about.
                    </p>
                </div>

            </div>
        </div>

    )
}

export default Guidelines;