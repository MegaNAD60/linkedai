import { useMediaQuery } from 'react-responsive';

function BigIdea(){

    // MEDIA QUERIES
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 800, maxWidth: 7000})
        return isDesktop ? children : null
    }
    const Phone = ({children}) => {
        const isPhone = useMediaQuery({minWidth: 300, maxWidth: 800})
        return isPhone ? children : null
    }

    //DESKOP CSS STYLE
    const columnTemplate = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        padding: '0 120px'
    }

    const image = {
        height: '277px',
        width: '290px'
    }

    // PHONE CSS STYLE
    const phoneColumnTemplate = {
        display: 'grid',
        gridTemplateColumns: '100%',
        padding: '0 50px'
    }

    const phoneImage = {
        height: '277px',
        width: '290px',
    }

    return(
        <>
            <Desktop>
                <div style={columnTemplate}>
                    <img src={require('../images/the-big-idea.png')} alt='big-idea' style={image} />
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
            </Desktop>

            <Phone>
                <div style={phoneColumnTemplate}>
                    <img src={require('../images/the-big-idea.png')} alt='big-idea' style={phoneImage} />
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
            </Phone>
        </>
    )
}

export default BigIdea;