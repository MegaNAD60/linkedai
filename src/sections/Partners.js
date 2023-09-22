function Partners(){

    const image = {
        height: '460px',
        width: '1155px',
    }

    return(
        <>
            <div className='partners' style={{textAlign: 'center'}}>
                <h2>Partners and Sponsors</h2>
                <p>
                    Getlinked Hackathon 1.0 is honored to have the following<br/>
                    major companies as its partners and sponsors
                </p>
                <img src={require('../images/partners.png')} alt='partners' style={image} />
            </div>
        </>
    )
}

export default Partners;