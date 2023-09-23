import Button from '../components/Button';
import { useMediaQuery } from 'react-responsive'

function Header(){

    // MEDIA QUERIES
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 600, maxWidth: 7000})
        return isDesktop ? children : null
    }
    const Phone = ({children}) => {
        const isPhone = useMediaQuery({minWidth: 300, maxWidth: 600})
        return isPhone ? children : null
    }

   // CSS STYLING
   // DESKTOP CSS STYLE
   const header = {
    backgroundImage: 'radial-gradient(closest-side at 15% 33%, #903aff4d,  #150e28)',
   }
   const columnTemplate ={
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        justifyContent: 'space-between',
        marginTop: '60px',
        padding: '0 120px'
   }

    const star = {
        height: '3px',
        width: '3px'
    }

    const title = {
        height: '210px',
        width: '622px'
    }

    const man = {
        height: '515px',
        width: '628px'
    }

    const image = {
        height: '441px',
        width: '467px',
        position: 'absolute',
        top: '50px',
        right: '200px'
    }

    // PHONE CSS STYLE
    const phoneColumnTemplate = {
        display: 'grid',
        gridTemplateColumns: '100%',
        marginTop: '60px',
        padding: '0 50px'
    }

    const phoneStar = {
        height: '3px',
        width: '3px'
    }

    const phoneTitle = {
        height: '100px',
        width: '250px'
    }

    const phoneImage1= {
        height: '241px',
        width: '80%',
    }

    const phoneImage2 ={
        height: '241px',
        width: '267px',
        position: 'absolute',
        top: '20px',
        right: '40px'
    }


    return(
        <>
        <Desktop>
            <div style={header}>
                <h3 style={{position: 'absolute', right: '100px', top: '100px', color: '#ffffff'}}><i>Igniting a Revolution in<span style={{textDecoration: 'underline'}}> HR innovation</span></i></h3>
                <div style={columnTemplate}>
                    <div>
                        <img src={require('../images/star.png')} alt='star' style={{star}} /> <br/>
                        <img src={require('../images/Title.png')} alt='title' style={title} />
                        <p style={{color: '#ffffff', fontSize: '1.2rem'}}>Participate in getlinked tech Hackathon 2023 stand a chance to win a big price</p>
                        <Button name='Register' />
                        <h2>00<small>H</small> 00<small>M</small> 00<small>S</small></h2>
                    </div>
                    <div style={{position: 'relative'}}>
                        <img src={require('../images/man-wearing-smart-glasses-touching-virtual-screen.png')} alt='man' style={man} />
                        <img src={require('../images/Image.png')} alt='tech' style={image} />
                    </div>
                </div>

            </div>
        </Desktop>

        <Phone>
            <div className='header'>
                    <h3 style={{position: 'absolute', right: '100px', top: '50px', color: '#ffffff'}}><i>Igniting a Revolution in HR innovation</i></h3>
                    <div style={phoneColumnTemplate}>
                        <div>
                            <img src={require('../images/star.png')} alt='star' style={{phoneStar}} /> <br/>
                            <img src={require('../images/Title.png')} alt='title' style={phoneTitle} />
                            <p style={{color: '#ffffff', fontSize: '1.2rem'}}>Participate in getlinked tech Hackathon 2023 stand a chance to win a big price</p>
                            <Button name='Register' />
                            <h2>00<small>H</small> 00<small>M</small> 00<small>S</small></h2>
                        </div>
                        <div style={{position: 'relative'}}>
                            <img src={require('../images/man-wearing-smart-glasses-touching-virtual-screen.png')} alt='man' style={phoneImage1} />
                            <img src={require('../images/Image.png')} alt='tech' style={phoneImage2} />
                        </div>
                    </div>

                </div>
            </Phone>
        </>
    )
}

export default Header;