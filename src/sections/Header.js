import Button from '../components/Button';
import { useMediaQuery } from 'react-responsive'

function Header(){

    // MEDIA QUERIES
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 800, maxWidth: 7000})
        return isDesktop ? children : null
    }
    const Phone = ({children}) => {
        const isPhone = useMediaQuery({minWidth: 300, maxWidth: 800})
        return isPhone ? children : null
    }

   // DESKTOP CSS STYLE
   const header = {
    marginTop: '50px',
    backgroundImage: 'radial-gradient(closest-side at 15% 33%, #903aff4d,  #150e28)',
   }
   const columnTemplate ={
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        justifyContent: 'space-between',
        marginTop: '100px',
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
        right: '100px'
    }

    const innovation = {
        position: 'relative',
        float: 'right',
        top: '-100px',
        right: '300px'
    }

    const h3 = {
        color: '#ffffff',
        fontSize: '1.3rem',

    }

    const line = {
        position: 'aboslute',
        marginTop: '-10px',
        width: '200px',
        height: '100px',
        marginLeft: '200px',
        border: 'solid 5px #d434ef',
        borderColor: '#d434ef transparent transparent transparent',
        borderRadius: '80%/100px 100px 0 0',
    }

    return(
        <>
        <Desktop>
            <div style={header}>
                <div style={innovation}>
                    <h3 style={h3}><i>Igniting a Revolution in<span className='hr'> HR innovation</span></i></h3>
                    <div style={line}></div>
                </div>
                <div style={columnTemplate}>
                    <div>
                        <img src={require('../images/star.png')} alt='star' style={{star}} /> <br/>
                        <img src={require('../images/Title.png')} alt='title' style={title} />
                        <p style={{color: '#ffffff', fontSize: '1.2rem'}}>Participate in getlinked tech Hackathon 2023 stand a chance to win a big price</p>
                        <Button name='Register' />
                        <h2>00<small style={{fontSize: '0.8rem'}}>H</small> 00<small style={{fontSize: '0.8rem'}}>M</small> 00<small style={{fontSize: '0.8rem'}}>S</small></h2>
                    </div>
                    <div style={{position: 'relative'}}>
                        <img src={require('../images/man-wearing-smart-glasses-touching-virtual-screen.png')} alt='man' style={man} />
                        <img src={require('../images/Image.png')} alt='tech' style={image} />
                    </div>
                </div>

            </div>
        </Desktop>

        <Phone>
            <div className='header'
              style={{
                marginTop: '10px',
                backgroundImage: 'radial-gradient(closest-side at 40% 20%, #903aff4d,  #150e28)',
               }}>
                <div style={{position: 'relative'}}>
                    <h3 style={{
                                position: 'absolute',
                                right: '50px',
                                top: '-40px',
                                color: '#ffffff',
                                fontSize: '1rem',
                    }}>Igniting a Revolution in HR innovation</h3>

                    <div style={{
                                position: 'aboslute',
                                marginTop: '30px',
                                marginLeft: '120px',
                                width: '150px',
                                height: '60px',
                                border: 'solid 5px #d434ef',
                                borderColor: '#d434ef transparent transparent transparent',
                                borderRadius: '80%/100px 100px 0 0',
                    }}></div>
                </div>

                <div style={{
                            display: 'grid',
                            gridTemplateColumns: '100%',
                            padding: '0 50px'
                }}>
                    <div>
                        <img
                         src={require('../images/star.png')}
                         alt='star'
                         style={{
                            height: '20px',
                            width: '20px'
                         }} /> <br/>

                        <img
                         src={require('../images/Title.png')}
                         alt='title'
                         style={{
                            height: '100px',
                            width: '250px'
                         }} />

                        <p style={{color: '#ffffff', fontSize: '1.2rem'}}>Participate in getlinked tech Hackathon 2023 stand a chance to win a big price</p>
                        <Button name='Register' />
                        <h2>00<small style={{fontSize: '0.8rem'}}>H</small> 00<small style={{fontSize: '0.8rem'}}>M</small> 00<small style={{fontSize: '0.8rem'}}>S</small></h2>
                    </div>

                    <div style={{position: 'relative'}}>
                        <img
                         src={require('../images/man-wearing-smart-glasses-touching-virtual-screen.png')}
                         alt='man'
                         style={{
                            height: '290px',
                            width: '80%',
                         }} />
                        <img
                         src={require('../images/Image.png')}
                         alt='tech'
                         style={{
                                    height: '241px',
                                    width: '267px',
                                    position: 'absolute',
                                    top: '20px',
                                    right: '100px'
                        }} />
                    </div>

                </div>

              </div>
            </Phone>
        </>
    )
}

export default Header;