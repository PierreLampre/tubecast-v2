import React from 'react'
import ProgramBlock from "./ProgramBlock"
import "./channel-strip.css"

const ChannelStrip = ({ name, schedule, timeDigit, ampm, passIdChann }) => {

    //get the channel name and digits
    let end = parseInt(name.channelText.length);
    let num = name.channelText.slice(0, 3);
    let channel = name.channelText.slice(3, end);

    //get time information
    let hour = parseInt(timeDigit.slice(0, 1));
    let zeroOrThirty = timeDigit.slice(2, 3);

    //should you want to spoof the clock...
    // hour = 3;
    // zeroOrThirty = 4;
    // ampm = "am"

    if (timeDigit.slice(1, 2) !== ":") {
        hour = timeDigit.slice(0, 2);
        zeroOrThirty = timeDigit.slice(3, 4);
    }

    //define current programming for channel
    let thisHoursPrograms = [];

    let firstProgram = hour + ampm;
    let secondProgram = hour + ":30" + ampm;
    let thirdProgram = hour + 1 + ampm;
    let ifSecondProgramIs30Min = hour + 1 + ":30" + ampm;

    for (let i = 0; i < schedule.length; i++) {
        if (schedule[i].timeSlot === firstProgram
            ||
            schedule[i].timeSlot === secondProgram
            ||
            schedule[i].timeSlot === thirdProgram
            ||
            schedule[i].timeSlot === ifSecondProgramIs30Min) {
            thisHoursPrograms.push(schedule[i]);
        }
    }

    console.log(thisHoursPrograms);

    let programElements = [];

    if (thisHoursPrograms.length === 2 && zeroOrThirty < 3) {
        programElements = [
            <ProgramBlock
                _css={"block row-2-to-4"}
                passId={passId}
                id={thisHoursPrograms[0].id}
                name={thisHoursPrograms[0].name}
            />,
            <ProgramBlock
                _css={"block row-4-to-5"}
                passId={passId}
                id={thisHoursPrograms[1].id}
                name={thisHoursPrograms[1].name}
            />
        ]
    } else if (thisHoursPrograms.length === 2 && zeroOrThirty >= 3) {
        programElements = [
            <ProgramBlock
                _css={"block row-2-to-3"}
                passId={passId}
                id={thisHoursPrograms[0].id}
                name={thisHoursPrograms[0].name}
            />,
            <ProgramBlock
                _css={"block row-3-to-5"}
                passId={passId}
                id={thisHoursPrograms[1].id}
                name={thisHoursPrograms[1].name}
            />
        ]
    } else if (thisHoursPrograms.length === 3 && zeroOrThirty < 3) {
        programElements = [
            <ProgramBlock
                _css={"block row-2-to-3"}
                passId={passId}
                id={thisHoursPrograms[0].id}
                name={thisHoursPrograms[0].name}
            />,
            <ProgramBlock
                _css={"block row-3-to-4"}
                passId={passId}
                id={thisHoursPrograms[1].id}
                name={thisHoursPrograms[1].name}
            />,
            <ProgramBlock
                _css={"block row-4-to-5"}
                passId={passId}
                id={thisHoursPrograms[2].id}
                name={thisHoursPrograms[2].name}
            />
        ]
    } else {
        programElements = [
            <ProgramBlock
                _css={"block row-2-to-3"}
                passId={passId}
                id={thisHoursPrograms[1].id}
                name={thisHoursPrograms[1].name}
            />,
            <ProgramBlock
                _css={"block row-3-to-5"}
                passId={passId}
                id={thisHoursPrograms[2].id}
                name={thisHoursPrograms[2].name}
            />
        ]
    }

    //lift up the proper video ID onClick

    function passId(id) {
        passIdChann(id);
    }

    return (
        <div className="channel-strip-container">
            <div className="name">
                <h4 className="number">{num}</h4>
                <h4 className="title">{channel}</h4>
            </div>
            {programElements.map(
                program => program
            )}
        </div>
    )
}

export default ChannelStrip
