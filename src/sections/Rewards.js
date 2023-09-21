function Rewards(){

    const image1 = {
        height: '482px',
        width: '548px',
    }

    const image2 = {
        height: '494px',
        width: '692px',
    }

    return(
        <>
            <div className='rewards'>
                <img src={require('../images/rewards1.png')} alt='rewards1' style={image1} />
                <div>
                    <h2>Prizes and<br/><span style={{color: '#d434fe'}}>Rewards</span></h2>
                    <p>Highlight of the prizes or rewards for winners and for participants.</p>
                    <img src={require('../images/Rewards.png')} alt='rewards2' style={image2} />
               </div>
            </div>
        </>
    )
}

export default Rewards;