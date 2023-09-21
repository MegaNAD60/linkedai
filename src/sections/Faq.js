function Faq(){

    const image = {
        height: '641px',
        width: '641px',
    }

    return(
        <>
            <div className='rules'>
                <div>
                    <h2>Frequently Ask<br/><span style={{color: '#d434fe'}}>Question</span></h2>
                    <p>We got answers to the question that you might want to ask about getlinked Hackathon 1.0</p>
                    <p style={{padding: '10px 0', borderBottom: '1px solid #d434fe'}}>Can I work on a project I started before the hackathon? <span style={{color: '#d434fe'}}>+</span></p>
                    <p style={{padding: '10px 0', borderBottom: '1px solid #d434fe'}}>Can I work on a project I started before the hackathon? <span style={{color: '#d434fe'}}>+</span></p>
                    <p style={{padding: '10px 0', borderBottom: '1px solid #d434fe'}}>Can I work on a project I started before the hackathon? <span style={{color: '#d434fe'}}>+</span></p>
                    <p style={{padding: '10px 0', borderBottom: '1px solid #d434fe'}}>Can I work on a project I started before the hackathon? <span style={{color: '#d434fe'}}>+</span></p>
                    <p style={{padding: '10px 0', borderBottom: '1px solid #d434fe'}}>Can I work on a project I started before the hackathon? <span style={{color: '#d434fe'}}>+</span></p>
                    <p style={{padding: '10px 0', borderBottom: '1px solid #d434fe'}}>Can I work on a project I started before the hackathon? <span style={{color: '#d434fe'}}>+</span></p>
               </div>
                <img src={require('../images/cwok_casual_21.png')} alt='faq' style={image} />
            </div>
        </>
    )
}

export default Faq;