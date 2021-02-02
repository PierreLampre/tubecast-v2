import React from 'react'
import ChannelStrip from "./ChannelStrip/ChannelStrip"
import "./channels.css";

const Channels = () => {
    return (
        <div className="channels-container">
            <ChannelStrip />
            <ChannelStrip />
            <ChannelStrip />
            <ChannelStrip />
        </div>
    )
}

export default Channels;
