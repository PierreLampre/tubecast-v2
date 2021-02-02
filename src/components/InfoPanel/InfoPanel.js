import React from 'react'
import TV_G from "./img/tvg-logo.png"
import simmons from "./img/simmons.gif"
import "./info-panel.css"

const InfoPanel = () => {
    return (
        <div className="info-panel-container">
            <div className="logo"><h1>Tubecast</h1></div>
            <div className="clock-box">
                <p>TV Listings</p>
                <div className="clock-and-mail">
                    <p>*</p>
                    <p>4:35am</p>
                </div>
            </div>
            <div className="tv-guide">
                <img src={TV_G} alt="" className="src" />
            </div>
            <div className="channel-and-program">
                <div className="info-program">Richard Simmons: Dancin' To Manson</div>
                <div className="info-channel">4 ION</div>
            </div>
            <div className="commercial">
                <img src={simmons} alt="Richard Simmons dancing" />
            </div>
            <div className="blurb-box">
                We're still not sure if we like the drugs, or if they like us.
                But that won't stop us from dancin' off those pounds...
            </div>
        </div>
    )
}

export default InfoPanel
