import { Desktop, Phone } from '../components/MediaQueries'

function Guidelines(){
    // DESKTOP VIEW
    const columnTemplate = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        padding: '0 120px'
    }

    const image = {
        height: '564px',
        width: '564px',
    }

    // PHONE VIEW
    const phoneColumnTemplate = {
        display: 'grid',
        gridTemplateColumns: '100%',
        padding: '0 50px'
    }

    const phoneImage = {
        height: '300px',
        width: '300px',
    }

    return(
        <>
            <Desktop>
                <div style={columnTemplate}>
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
            </Desktop>

            <Phone>
                <div style={phoneColumnTemplate}>
                        <div>
                            <h2>Rules and <br/><span style={{color: '#d434fe'}}>Guidelines</span></h2>
                            <p>
                                Our tech hackathon is a melting point of visionaries, and its purpose is as clear
                                as day: to shape the future. Whether you're a coding genius, a design maverick, or a
                                concept wizard, you'll have the chance to transform your ideas into reality. Solving
                                real-world problems, pushing the boundaries of technology, and creating solutions
                                that can change the world, that's what we're all about.
                            </p>
                        </div>
                    <img src={require('../images/rules.png')} alt='guidelines' style={phoneImage} />
                </div>
            </Phone>
        </>
    )
}

export default Guidelines;