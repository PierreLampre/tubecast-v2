import React from 'react'
import ChannelStrip from "./ChannelStrip/ChannelStrip"
import "./channels.css";

const Channels = ({ programSchedule, timeDigit, ampm }) => {

    return (
        <div className="channels-container">
            <ChannelStrip
                name={programSchedule.blurbs.drama}
                schedule={programSchedule.channels.drama}
                timeDigit={timeDigit}
                ampm={ampm}
            />
            <ChannelStrip
                name={programSchedule.blurbs.mystery}
                schedule={programSchedule.channels.mystery}
                timeDigit={timeDigit}
                ampm={ampm}
            />
            <ChannelStrip
                name={programSchedule.blurbs.mst3k}
                schedule={programSchedule.channels.mst3k}
                timeDigit={timeDigit}
                ampm={ampm}
            />
            <ChannelStrip
                name={programSchedule.blurbs.foodie}
                schedule={programSchedule.channels.foodie}
                timeDigit={timeDigit}
                ampm={ampm}
            />
        </div>
    )
}

export default Channels;
