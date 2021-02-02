import React from 'react'
import simmons from "./img/simmons.gif"
import "./info.css";

const Info = () => {
    return (
        <div className="info-container">
            <div className="channel-and-program">
                <div className="info-program">Richard Simmons: Dancin' To Manson</div>
                <div className="info-channel">4 ION</div>
            </div>
            <div className="commercial"></div>
            <div className="blurb-box">
                We're still not sure if we like the drugs, or if they like us.
                But that won't stop us from dancin' off those pounds...
            </div>
        </div>
    )
}

export default Info
