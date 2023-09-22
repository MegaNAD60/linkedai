import Button from '../components/Button';

function KeyAttributes(){

    const star = {
        height: '3px',
        width: '3px',
        color: '#d434fe'
    }

    const image = {
        height: '587px',
        width: '710px'
    }

    return(
        <>
            <div className='big-idea'>
                <div>
                    <img src={require('../images/star_pu.png')} alt='star' style={{star}} /> <br/><br/>
                    <img src={require('../images/attributes.png')} alt='key-attributes' style={image} />
                </div>
                <div>
                    <h2>Judging criteria<br/><span style={{color: '#d434fe'}}>Key attributes</span></h2>
                    <p><span style={{color: '#d434fe', fontWeight: 'bold'}}>Innovation and creativity:</span> Evaluate
                    the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in
                    a nobel way or introduces innovative features.
                    </p>
                    <p><span style={{color: '#d434fe', fontWeight: 'bold'}}>Functionality:</span> Assess how well the
                    solution works. Does it perform its intended functions effectively and without major issue? Judges
                    would consider the completeness and robustness of the solution.
                    </p>
                    <p><span style={{color: '#d434fe', fontWeight: 'bold'}}>Impact and Relevance:</span> Determine the potential
                    impact of the solution in the real world. Does it address a significant problem, and is it relevant to the
                    target audience? Judges would assess the potential social, economic or environmental benefits.
                    </p>
                    <p><span style={{color: '#d434fe', fontWeight: 'bold'}}>Technical Complexity:</span> Evaluate the technical
                    sophistication of the solution. Judges would consider the complexity of the code, the use of advance technologies
                    or algorithms, and the scalability of the solution.
                    </p>
                    <p><span style={{color: '#d434fe', fontWeight: 'bold'}}>Adherance to Hackathon Rules:</span> Judges will ensure that
                    the teams adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or
                    APIs, and any other competition-specific requirements.
                    </p>
                    <Button name='Read more' />
                </div>
            </div>
        </>
    )
}

export default KeyAttributes;