import { useMediaQuery } from "react-responsive"

function Timeline(){

    // MEDIA QUERIES
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 800, maxWidth: 7000})
        return isDesktop ? children : null
    }
//    const Phone = ({children}) => {
//        const isPhone = useMediaQuery({minWidth: 300, maxWidth: 800})
//        return isPhone ? children : null
//    }

    // DESKTOP CSS STYLE
    const columnTemplate = {
        padding: '0 220px',
    }

    // PHONE CSS STYLE

    return(
        <>
            <Desktop>
                <div>
                    <center>
                        <div>
                            <h2>Timeline</h2>
                            <p>Here is the breakdown of the time we anticipate<br />using for the upcoming event.</p>
                        </div>
                    </center>
                </div>

                <div className="flexTemplate">

                    <div className="timeline" style={columnTemplate}>
                        <div>
                            <h3>Hackathon Annoncement</h3>
                            <p>The getlinked tech Hackathon is normally announced<br /> to the public and teams begin to get ready to register</p>
                        </div>
                        <div className="line">1</div>
                        <h3>November 18, 2023</h3>
                    </div>

                    <div className="timeline" style={columnTemplate}>
                        <h3>November 18, 2023</h3>
                        <div className="line">1</div>
                        <div>
                            <h3>Hackathon Annoncement</h3>
                            <p>The getlinked tech Hackathon is normally announced<br /> to the public and teams begin to get ready to register</p>
                        </div>
                    </div>

                    <div className="timeline" style={columnTemplate}>
                        <div>
                            <h3>Hackathon Annoncement</h3>
                            <p>The getlinked tech Hackathon is normally announced<br /> to the public and teams begin to get ready to register</p>
                        </div>
                        <div className="line">1</div>
                        <h3>November 18, 2023</h3>
                    </div>

                    <div className="timeline" style={columnTemplate}>
                        <div>
                            <h3>Hackathon Annoncement</h3>
                            <p>The getlinked tech Hackathon is normally announced<br /> to the public and teams begin to get ready to register</p>
                        </div>
                        <div className="line">1</div>
                        <h3>November 18, 2023</h3>
                    </div>

                    <div className="timeline" style={columnTemplate}>
                        <div>
                            <h3>Hackathon Annoncement</h3>
                            <p>The getlinked tech Hackathon is normally announced<br /> to the public and teams begin to get ready to register</p>
                        </div>
                        <div className="line">1</div>
                        <h3>November 18, 2023</h3>
                    </div>

                    <div className="timeline" style={columnTemplate}>
                        <div>
                            <h3>Hackathon Annoncement</h3>
                            <p>The getlinked tech Hackathon is normally announced<br /> to the public and teams begin to get ready to register</p>
                        </div>
                        <div className="line">1</div>
                        <h3>November 18, 2023</h3>
                    </div>

                </div>
            </Desktop>
        </>
    )
}


export default Timeline;