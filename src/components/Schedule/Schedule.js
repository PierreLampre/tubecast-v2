import React from 'react'
import Timestrip from "./Timestrip/Timestrip";
import Channels from "./Channels/Channels";
import "./schedule.css"

const Schedule = () => {
    return (
        <div className="schedule-container">
            <Timestrip />
            <Channels />
        </div>
    )
}

export default Schedule
