import React from 'react'
import NewChannelStrip from "./ChannelStrip/NewChannelStrip"
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
            <NewChannelStrip
                name={programSchedule.blurbs.drama}
                schedule={programSchedule.channels.drama}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <NewChannelStrip
                name={programSchedule.blurbs.mystery}
                schedule={programSchedule.channels.mystery}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <NewChannelStrip
                name={programSchedule.blurbs.mst3k}
                schedule={programSchedule.channels.mst3k}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <NewChannelStrip
                name={programSchedule.blurbs.foodie}
                schedule={programSchedule.channels.foodie}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <NewChannelStrip
                name={programSchedule.blurbs.collegeRock}
                schedule={programSchedule.channels.collegeRock}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <NewChannelStrip
                name={programSchedule.blurbs.drama}
                schedule={programSchedule.channels.drama}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <NewChannelStrip
                name={programSchedule.blurbs.mystery}
                schedule={programSchedule.channels.mystery}
                timeDigit={timeDigit}
                ampm={ampm}
                passIdChann={passIdChann}
                toggleTheView={toggleTheViewChann}
                sendPrograms={sendProgramsChann}
            />
            <NewChannelStrip
                name={programSchedule.blurbs.mst3k}
                schedule={programSchedule.channels.mst3k}
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
