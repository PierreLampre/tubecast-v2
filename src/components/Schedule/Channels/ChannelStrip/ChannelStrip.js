import React from 'react'
import "./channel-strip.css"

const ChannelStrip = () => {
    return (
        <div className="channel-strip-container">
            <div className="name">
                <h4 className="number">000</h4>
                <h4 className="title">Channel</h4>
            </div>
            <div className="block program-1">
                <h4>Program</h4>
            </div>
            <div className="block program-2">
                <h4>Program</h4>
            </div>
        </div>
    )
}

export default ChannelStrip
