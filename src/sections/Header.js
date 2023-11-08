import Button from '../components/Button';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Desktop, Phone} from '../components/MediaQueries';
import { useEffect } from 'react';

function Header(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

   // DESKTOP CSS STYLE
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


    return(
        <>
        <Desktop>
            <div style={{
                marginTop: '50px',
                backgroundImage: 'radial-gradient(closest-side at 15% 33%, #903aff4d,  #150e28)',
            }}>
                <div style={{
                        position: 'absolute',
                        top: '100px',
                        right: '300px'
                    }}>
                    <h3 style={{
                            position: 'relative',
                            color: '#ffffff',
                            fontSize: '1.3rem',
                        }}>
                        <i>Igniting a Revolution in HR innovation</i>
                        <div style={{
                                position: 'absolute',
                                marginTop: '5px',
                                width: '200px',
                                height: '100px',
                                marginLeft: '200px',
                                border: 'solid 5px #d434ef',
                                borderColor: '#d434ef transparent transparent transparent',
                                borderRadius: '80%/50px 50px 0 0',
                            }}>
                        </div>
                    </h3>
                </div>
                <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        justifyContent: 'space-between',
                        marginTop: '100px',
                        padding: '0 120px'
                }}>
                    <div data-aos="fade-up">
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
                <div style={{
                        position: 'absolute',
                        left: '20px'
                    }}>
                    <h3 style={{
                                position: 'relative',
                                marginTop: '10px',
                                color: '#ffffff',
                                fontSize: '1rem',
                    }}>
                    Igniting a Revolution in HR innovation
                    <div style={{
                            position: 'absolute',
                            marginTop: '5px',
                            width: '150px',
                            height: '70px',
                            marginLeft: '150px',
                            border: 'solid 2px #d434ef',
                            borderColor: '#d434ef transparent transparent transparent',
                            borderRadius: '80%/50px 50px 0 0',
                        }}>
                    </div>
                </h3>

                </div>

                <div style={{
                            display: 'grid',
                            gridTemplateColumns: '100%',
                            padding: '0 50px',
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
                            width: '250px',
                            margin: '50px 0 0 0'
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