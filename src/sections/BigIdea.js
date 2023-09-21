function BigIdea(){

    const bigIdea = {
        height: '377px',
        width: '390px'
    }

    return(
        <>
            <div className='big-idea'>
                <img src={require('../images/the-big-idea.png')} alt='big-idea' style={bigIdea} />
                <div>
                    <h2>Introduction to getlinked<br/><span style={{color: '#d434fe'}}>techHackathon 1.0</span></h2>
                    <p>Our tech hackathon is a melting point of visionaries, and its purpose is as clear
                        as day: to shape the future. Whether you're a coding genius, a design maverick, or a
                        concept wizard, you'll have the chance to transform your ideas into reality. Solving
                        real-world problems, pushing the boundaries of technology, and creating solutions
                        that can change the world, that's what we're all about.
                    </p>
                </div>
            </div>
        </>
    )
}

export default BigIdea;