function Guidelines(){

    const image = {
        height: '564px',
        width: '564px',
    }
    return(
        <>
            <div className='rules'>
                <div>
                        <h2>Rules and <br/><span style={{color: '#d434fe'}}>Guidelines</span></h2>
                        <p>Our tech hackathon is a melting point of visionaries, and its purpose is as clear
                        as day: to shape the future. Whether you're a coding genius, a design maverick, or a
                        concept wizard, you'll have the chance to transform your ideas into reality. Solving
                        real-world problems, pushing the boundaries of technology, and creating solutions
                        that can change the world, that's what we're all about.
                    </p>
               </div>
                <img src={require('../images/rules.png')} alt='guidelines' style={image} />
            </div>
        </>
    )
}

export default Guidelines;