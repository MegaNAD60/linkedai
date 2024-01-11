// IMPORT COMPONENTS
import Button from '../components/Button';

// IMPORT IMAGES
import star from '../images/star_pu.png'
import attributes from '../images/attributes.png'

function KeyAttributes(){

    return(
        <div>
            <div className='max-w-[1240px] md:grid md:grid-cols-3 lg:grid-cols-2 gap-10 mx-auto py-10 px-6'>

                <div>
                    <img src={star} alt='/' /> <br/><br/>
                    <img src={attributes} alt='/' />
                </div>

                <div className='md:col-span-2 lg:col-span-1'>
                    <h2 className='font-medium md:text-3xl sm:text-2xl text-xl'>Judging criteria<br/><span style={{color: '#d434fe'}}>Key attributes</span></h2>
                    <p className='mt-4 lg:leading-8'><span className='text-[#d434fe] font-medium'>Innovation and creativity:</span> Evaluate
                    the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in
                    a nobel way or introduces innovative features.
                    </p>
                    <p className='mt-4 lg:leading-8'><span className='text-[#d434fe] font-medium'>Functionality:</span> Assess how well the
                    solution works. Does it perform its intended functions effectively and without major issue? Judges
                    would consider the completeness and robustness of the solution.
                    </p>
                    <p className='mt-4 lg:leading-8'><span className='text-[#d434fe] font-medium'>Impact and Relevance:</span> Determine the potential
                    impact of the solution in the real world. Does it address a significant problem, and is it relevant to the
                    target audience? Judges would assess the potential social, economic or environmental benefits.
                    </p>
                    <p className='mt-4 lg:leading-8'><span className='text-[#d434fe] font-medium'>Technical Complexity:</span> Evaluate the technical
                    sophistication of the solution. Judges would consider the complexity of the code, the use of advance technologies
                    or algorithms, and the scalability of the solution.
                    </p>
                    <p className='mt-4 lg:leading-8'><span className='text-[#d434fe] font-medium'>Adherance to Hackathon Rules:</span> Judges will ensure that
                    the teams adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or
                    APIs, and any other competition-specific requirements.
                    </p>
                    <Button name='Read more' />
                </div>
            </div>
        </div>


    )
}

export default KeyAttributes;