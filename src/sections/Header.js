import Button from '../components/Button';

function Header(){

    // CSS STYLING

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
        top: '120px',
        right: '100px'
    }

    const resposive = {}

    return(
        <div className='header'>
            <h3 style={{position: 'absolute', right: '100px', top: '50px', color: '#ffffff'}}><i>Igniting a Revolution in HR innovation</i></h3>
            <div className='hearder-details'>
                <div>
                    <img src={require('../images/star.png')} alt='star' style={{star}} /> <br/>
                    <img src={require('../images/Title.png')} alt='title' style={title} />
                    <p style={{color: '#ffffff', fontSize: '1.2rem'}}>Participate in getlinked tech Hackathon 2023 stand a chance to win a big price</p>
                    <Button name='Register' />
                    <h2>00<small>H</small> 00<small>M</small> 00<small>S</small></h2>
                </div>
                <div>
                    <img src={require('../images/man-wearing-smart-glasses-touching-virtual-screen.png')} alt='man' style={man} />
                    <img src={require('../images/Image.png')} alt='tech' style={image} />
                </div>
            </div>
        </div>
    )
}

export default Header;