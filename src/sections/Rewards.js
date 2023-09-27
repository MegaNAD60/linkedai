import { Desktop, Phone } from '../components/MediaQueries'

function Rewards(){

   // DESKTOP CSS STYLE

    const columnTemplate= {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        padding: '0 120px'
    }

    const image1 = {
        height: '482px',
        width: '548px',
    }

    const image2 = {
        height: '494px',
        width: '692px',
    }

    // PHONE CSS STYLE

    const phoneColumnTemplate = {
        display: 'grid',
        gridTemplateColumns: '100%',
        padding: '0 50px'
    }

    const phoneImage1 = {
        height: '400px',
        width: '100%',
    }

    const phoneImage2 = {
        height: '300px',
        width: '100%',
    }

    return(
        <>
            <Desktop>
                <div style={columnTemplate}>
                    <img src={require('../images/rewards1.png')} alt='rewards1' style={image1} />
                    <div>
                        <h2>Prizes and<br/><span style={{color: '#d434fe'}}>Rewards</span></h2>
                        <p>Highlight of the prizes or rewards for winners and for participants.</p>
                        <img src={require('../images/Rewards.png')} alt='rewards2' style={image2} />
                </div>
                </div>
            </Desktop>

            <Phone>
                <div style={phoneColumnTemplate}>
                    <img src={require('../images/rewards1.png')} alt='rewards1' style={phoneImage1} />
                    <div>
                        <h2>Prizes and<br/><span style={{color: '#d434fe'}}>Rewards</span></h2>
                        <p>Highlight of the prizes or rewards for winners and for participants.</p>
                        <img src={require('../images/Rewards.png')} alt='rewards2' style={phoneImage2} />
                </div>
                </div>
            </Phone>
        </>
    )
}

export default Rewards;