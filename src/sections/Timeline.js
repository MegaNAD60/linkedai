import { useMediaQuery } from "react-responsive"

function Timeline(){

    // MEDIA QUERIES
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 800, maxWidth: 7000})
        return isDesktop ? children : null
    }
    const Phone = ({children}) => {
        const isPhone = useMediaQuery({minWidth: 300, maxWidth: 800})
        return isPhone ? children : null
    }

    // DESKTOP CSS STYLE
    const columnTemplate = {
        padding: '0 220px',
        fontSize: '1.1rem',
    }

    // PHONE CSS STYLE
    const phoneColumnTemplate = {
        padding: '0 20px',
    }

    return(
        <>
            <Desktop>
                <div style={columnTemplate}>
                    <div>
                        <center>
                            <div>
                                <h2>Timeline</h2>
                                <p>Here is the breakdown of the time we anticipate<br /> using for the upcoming event.</p>
                            </div>
                        </center>
                    </div>

                    <div className="flexTemplate">

                        <div style={{textAlign: 'right'}}>

                            <div>
                                <p><span style={{color: '#d434fe'}}><b>Hackathon Announcement</b><br/></span>The getlinked tech Hackathon is normally announced<br /> to the public and teams begin to get ready to register</p>
                            </div>

                            <h3 style={{marginTop: '60px'}}>November 18, 2023</h3>

                            <div style={{marginTop: '60px'}}>
                                <p><span style={{color: '#d434fe'}}><b>Getlinked Hackathon 1.o Officially Begins</b><br/></span>Accepted teams can now proceed to build their<br /> ground breaking skill driven solutions</p>
                            </div>

                            <h3 style={{marginTop: '60px'}}>November 18, 2023</h3>

                            <div style={{marginTop: '60px'}}>
                                <p><span style={{color: '#d434fe'}}><b>Teams Registration ends</b><br/></span>Interested Participants are no longer allowed to<br /> register</p>
                            </div>

                            <h3 style={{marginTop: '60px'}}>November 18, 2023</h3>
                        </div>


                        <div>
                            <div className="lines">
                                <div className="line">1</div>
                            </div>

                            <div className="lines">
                                <div className="line">2</div>
                            </div>

                            <div className="lines">
                                <div className="line">3</div>
                            </div>

                            <div className="lines">
                                <div className="line">4</div>
                            </div>

                            <div className="lines">
                                <div className="line">5</div>
                            </div>

                            <div className="lines">
                                <div className="line">6</div>
                            </div>
                        </div>


                        <div>
                            <h3 style={{paddingTop: '60px'}}>November 18, 2023</h3>

                            <div style={{marginTop: '60px'}}>
                                <p><span style={{color: '#d434fe'}}><b>Teams Registration begins</b><br/></span>Interested teams can now show their interest in the <br/> getlinked tech hackaton 1.0 2023 by proceeding to register</p>
                            </div>

                            <h3 style={{marginTop: '60px'}}>November 18, 2023</h3>

                            <div style={{marginTop: '60px'}}>
                                <p><span style={{color: '#d434fe'}}><b>Announcement of the accepted teams and ideas</b><br/></span>All teams whom idea has been accepted into getlinked tech<br /> hackaton .0 2023 are formally announced</p>
                            </div>

                            <h3 style={{marginTop: '60px'}}>November 18, 2023</h3>

                            <div style={{marginTop: '60px'}}>
                                <p><span style={{color: '#d434fe'}}><b>Demo Day</b><br/></span>Teams get the opportunity to pitch their projects to judges.<br /> The winner of the hackathon will also be announced on<br /> this day</p>
                            </div>
                        </div>

                    </div>

                </div>

            </Desktop>

            <Phone>
                <div style={phoneColumnTemplate}>
                    <div>
                        <center>
                            <h2>Timeline</h2>
                            <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                        </center>
                    </div>

                    <div style={{display: 'flex', position: 'relative'}}>
                        <div className="line">1</div>
                        <div className="activities">
                            <p>The getlinked tech Hackathon is normally announced to the public and teams begin to get ready to register<br /><b style={{color: '#d434ef'}}>Teams Registration begins</b></p>
                        </div>
                    </div>

                    <div style={{display: 'flex', position: 'relative'}}>
                        <div className="line">2</div>
                        <div className="activities">
                            <p>The getlinked tech Hackathon is normally announced to the public and teams begin to get ready to register<br /><b style={{color: '#d434ef'}}>Teams Registration begins</b></p>
                        </div>
                    </div>

                    <div style={{display: 'flex', position: 'relative'}}>
                        <div className="line">3</div>
                        <div className="activities">
                            <p>The getlinked tech Hackathon is normally announced to the public and teams begin to get ready to register<br /><b style={{color: '#d434ef'}}>Teams Registration begins</b></p>
                        </div>
                    </div>

                    <div style={{display: 'flex', position: 'relative'}}>
                        <div className="line">4</div>
                        <div className="activities">
                            <p>The getlinked tech Hackathon is normally announced to the public and teams begin to get ready to register<br /><b style={{color: '#d434ef'}}>Teams Registration begins</b></p>
                        </div>
                    </div>
                </div>
            </Phone>
        </>
    )
}


export default Timeline;