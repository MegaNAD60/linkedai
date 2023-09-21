import Button from '../components/Button';

function PrivacyPolicy(){

    //CSS STYLES
    const image1 = {
        width: '530',
        height: '648'
    }

    const image2 = {
        width: '559px',
        height: '749px',
        marginTop: '-500px'
    }

    const licenseBox = {
        padding: '30px',
        margin : '20px',
        border: '1px solid #d434fe',
        borderRadius: '5px'
    }

    return(
        <>
            <div className='privacy'>
                <div>
                    <h2>Privacy Policy and<br/><span style={{color: '#d434fe'}}>Terms</span></h2>
                    <p>Last updated on September 12, 2023</p>
                    <p>
                        Below are our privacy, which outline a lot of goodies.<br/> Its our aim to always
                        take of our participant.
                    </p>
                    <div style={licenseBox}>
                        <p>
                            At getlinked tech Hackathon 1.0, we value your privacy<br/> and are committed to protecting
                            your personal information.<br/> This Privacy Policy outlines how we collect, use, disclose,<br/>
                            and safeguard your data when you particapate in our tech<br/> hackathon event. By participating
                            in our event, you consent<br/> to the practices described in this policy.
                        </p>
                        <h3>Licensing Policy</h3>
                        <p>Here are some of our standard licence:</p>
                        <ul>
                            <li>The standard license grant you a non-exclusive right to navigate and register for our event</li>
                            <li>You are licensed to use the item available at any free source sites, for your project development</li>
                        </ul>
                        <center>
                            <Button name='Read More' />
                        </center>
                    </div>
                </div>
                <div>
                    <img src={require('../images/Vector.png')} alt='partners' style={image1} />
                    <img src={require('../images/privacy.png')} alt='partners' style={image2} />
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;