import React from 'react'
import ChannelStrip from "./ChannelStrip/ChannelStrip"
import Mst3kChannelStrip from "./ChannelStrip/Mst3kChannelStrip"
import CRChannelStrip from "./ChannelStrip/CRChannelStrip"
import "./channels.css";

const Channels = ({ passIdSched, programSchedule, timeDigit, ampm, toggleTheView, passOnDemandPrograms }) => {

    function passIdChann(id) {
        passIdSched(id);
    }

    function toggleTheViewChann() {
        toggleTheView();
    }

    function sendProgramsChann(arr) {
        passOnDemandPrograms(arr);
    }

    return (
        <div className="channels-container">
            <ChannelStrip
                name={programSchedule.blurbs.drama}
                schedule={programSchedule.channels.drama}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <ChannelStrip
                name={programSchedule.blurbs.mystery}
                schedule={programSchedule.channels.mystery}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <Mst3kChannelStrip
                name={programSchedule.blurbs.mst3k}
                schedule={programSchedule.channels.mst3k}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <ChannelStrip
                name={programSchedule.blurbs.foodie}
                schedule={programSchedule.channels.foodie}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <CRChannelStrip
                name={programSchedule.blurbs.collegeRock}
                schedule={programSchedule.channels.collegeRock}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
        </div>
    )
}

export default Channels;
