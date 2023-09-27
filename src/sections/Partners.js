import { Desktop, Phone } from '../components/MediaQueries'

function Partners(){

    // DESKTOP CSS STYLE
    const columnTemplate = {
        textAlign: 'center',
        padding: '0 120px',
    }

    const image = {
        height: '460px',
        width: '1155px',
    }

    // PHONE CSS STYLE
    const phoneColumnTemplate = {
        textAlign: 'center',
        padding: '0 50px'
    }

    const phoneImage = {
        height: '250px',
        width: '100%',
    }

    return(
        <>
            <Desktop>
                <div className='partners' style={columnTemplate}>
                    <h2>Partners and Sponsors</h2>
                    <p>
                        Getlinked Hackathon 1.0 is honored to have the following<br/>
                        major companies as its partners and sponsors
                    </p>
                    <img src={require('../images/partners.png')} alt='partners' style={image} />
                </div>
            </Desktop>

            <Phone>
                <div className='partners' style={phoneColumnTemplate}>
                    <h2>Partners and Sponsors</h2>
                    <p>
                        Getlinked Hackathon 1.0 is honored to have the following<br/>
                        major companies as its partners and sponsors
                    </p>
                    <img src={require('../images/partners.png')} alt='partners' style={phoneImage} />
                </div>
            </Phone>
        </>
    )
}

export default Partners;