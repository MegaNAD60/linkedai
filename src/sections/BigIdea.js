import idea from '../images/the-big-idea.png'

function BigIdea(){


    return(

        <div>
            <div className='max-w-[1240px] md:grid md:grid-cols-2 gap-10 mx-auto py-10 px-6'>
                <img src={idea} alt='/' className='w-[500px]' />
                <div className='mt-10'>
                    <h2 className='font-medium md:text-3xl sm:text-2xl text-xl'>Introduction to getlinked<br/><span className='text-[#d434fe]'>techHackathon 1.0</span></h2>
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

export default BigIdea;