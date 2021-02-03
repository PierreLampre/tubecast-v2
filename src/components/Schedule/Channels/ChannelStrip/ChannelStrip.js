import React from 'react'
import { Link } from "react-router-dom";
import "./channel-strip.css"

const ChannelStrip = () => {
    return (
        <div className="channel-strip-container">
            <div className="name">
                <h4 className="number">000</h4>
                <h4 className="title">Channel</h4>
            </div>
            <Link to="/pv" className="block program-1">
                <h4>Program</h4>
            </Link>
            <Link to="/pv" className="block program-2">
                <h4>Program</h4>
            </Link>
        </div>
    )
}

export default ChannelStrip
