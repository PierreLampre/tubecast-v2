import React from 'react'
import ProgramBlock from "./ProgramBlock"
import { Link } from "react-router-dom"
import "./channel-strip.css"

const ChannelStrip = ({ name, schedule, timeDigit, ampm, passIdChann, sendPrograms }) => {

    //get the channel name and digits
    let end = parseInt(name.channelText.length);
    let num = name.channelText.slice(0, 3);
    let channel = name.channelText.slice(3, end);

    //get time information
    let hour = parseInt(timeDigit.slice(0, 1));
    let zeroOrThirty = parseInt(timeDigit.slice(2, 3));

    if (timeDigit.slice(1, 2) !== ":") {
        hour = parseInt(timeDigit.slice(0, 2));
        zeroOrThirty = parseInt(timeDigit.slice(3, 4));
    }

    //should you want to spoof the clock...do it here
    //!!**!!**CHECK THIS BEFORE YOU THINK THE SCHEDULE HAS A BUG **!!**!!
    hour = 3
    zeroOrThirty = 3
    ampm = "pm"

    if (zeroOrThirty >= 3) {
        hour = hour + .5
    }

    //define current programming for channel

    let twelveHourBlock = [];
    let thisHoursPrograms = [];
    let programElements = [];

    //creates a new array of either am or pm programs
    //also adds the 12am or 12pm program to pm or am, respectively.

    for (let i = 0; i < schedule.length; i++) {
        if (schedule[i].ampm === "am" && ampm === "am") {
            twelveHourBlock.push(schedule[i]);
        } else if (schedule[i].ampm === "pm" && ampm === "pm") {
            twelveHourBlock.push(schedule[i]);
        }
    }

    //conditionals for 11 and 12 to go here.

    let cssClasses = {
        "two_hours": [
            "full", "full", "two-to-four",
            "two-to-three"
        ],
        "one_and_half_hours": [
            "full", "two-to-four", "two-to-three"
        ],
        "one_hour": [
            "two-to-four", "two-to-three"
        ],
        "half_hour": ["two-to-three"]
    }

    twelveHourBlock = twelveHourBlock.map(program => ({
        ...program, css: program.programLength === 2 ? cssClasses.two_hours : program.programLength === 1.5 ? cssClasses.one_and_half_hours
            : program.programLength === 1 ? cssClasses.one_hour : cssClasses.half_hour, currentCSS: ""
    }))

    let currentPrograms = [];
    let wideNet = [];
    let difference;

    function defineCurrentProgram() {

        for (let i = 0; i < twelveHourBlock.length; i++) {
            if (twelveHourBlock[i].hour === hour && twelveHourBlock[i].zOT === zeroOrThirty) {
                let program = twelveHourBlock[i];
                program.currentCSS = program.css[0]
                currentPrograms.push(program);
            }
            if (currentPrograms.length > 0) {
                console.log(`We found it, ${currentPrograms[0].name} is on the schedule.`)
            } else {
                if (twelveHourBlock[i].hour === hour - .5 || twelveHourBlock[i].hour === hour - 1 ||
                    twelveHourBlock[i].hour === hour - 2 || twelveHourBlock[i].hour === hour + .5 ||
                    twelveHourBlock[i].hour === hour + 1 || twelveHourBlock[i].hour === hour + 2 ||
                    twelveHourBlock[i].hour === hour) {
                    wideNet.push(twelveHourBlock[i]);
                    // if (wideNet.length <= 3) {
                    //     for (let i = 0; i < wideNet.length; i++) {
                    //         if (wideNet[i].hour === hour) {
                    //             wideNet = [wideNet[i]];
                    //         }
                    //     }
                    // } else {
                    //     wideNet = [];
                    //     for (let i = 0; i < twelveHourBlock.length; i++) {
                    //         if (twelveHourBlock[i].hour === hour - 1 ||
                    //             twelveHourBlock[i].hour === hour + 1 ||
                    //             twelveHourBlock[i].hour === hour) {
                    //             wideNet.push(twelveHourBlock[i]);
                    //         }
                    //     }
                    // }
                }
            }
        }
    }

    defineCurrentProgram();

    console.log(wideNet);

    // for (let i = 0; i < twelveHourBlock.length; i++) {

    //     if (twelveHourBlock[i].length === "one-and-a-half-hours") {
    //         if (twelveHourBlock[i].hour === hour - 1 || twelveHourBlock[i].hour === hour || twelveHourBlock[i].hour === (hour + 1) ||
    //             twelveHourBlock[i].hour === (hour + 2) || twelveHourBlock[i].hour === (hour + 3)) {
    //             thisHoursPrograms.push(twelveHourBlock[i]);
    //         }
    //     } else if (twelveHourBlock[i].hour === hour || twelveHourBlock[i].hour === (hour + 1) ||
    //         (twelveHourBlock[i].hour === hour && twelveHourBlock[i].zOT === 3) ||
    //         (twelveHourBlock[i].hour === (hour + 1) && twelveHourBlock[i].zOT === 3)) {
    //         thisHoursPrograms.push(twelveHourBlock[i]);
    //     }
    // }


    // //mutates array when hour === 11 to account for ampm differential of 11 and 12
    // if (hour === 11 && ampm === "pm") {
    //     let momentaryArray = [];
    //     for (let i = 0; i < thisHoursPrograms.length; i++) {
    //         if (thisHoursPrograms[i].ampm === "am" || thisHoursPrograms[i].hour === 11) {
    //             momentaryArray.push(thisHoursPrograms[i]);
    //         }
    //     }
    //     thisHoursPrograms = momentaryArray;
    // } else if (hour === 11 && ampm === "am") {
    //     let momentaryArray = [];
    //     for (let i = 0; i < thisHoursPrograms.length; i++) {
    //         if (thisHoursPrograms[i].ampm === "pm" || thisHoursPrograms[i].hour === 11) {
    //             momentaryArray.push(thisHoursPrograms[i]);
    //         }
    //     }
    //     thisHoursPrograms = momentaryArray;
    // }

    // //removes 12 slot programs with wrong ampm at when hour === 12
    // //accounts for different math involved in getting 12 and 1 slot programs

    // if (hour === 12) {
    //     let momentaryArray = [];
    //     if (ampm === "am") {
    //         for (let i = 0; i < twelveHourBlock.length; i++) {
    //             if ((twelveHourBlock[i].hour === 12 || twelveHourBlock[i].hour === 1)
    //                 && twelveHourBlock[i].ampm !== "pm") {
    //                 momentaryArray.push(twelveHourBlock[i])
    //             }
    //         }
    //     } else {
    //         for (let i = 0; i < twelveHourBlock.length; i++) {
    //             if ((twelveHourBlock[i].hour === 12 || twelveHourBlock[i].hour === 1)
    //                 && twelveHourBlock[i].ampm !== "am") {
    //                 momentaryArray.push(twelveHourBlock[i])
    //             }
    //         }
    //     }
    //     thisHoursPrograms = momentaryArray;
    // }

    // console.log(thisHoursPrograms)

    // //creates arrays of components to load into schedule and defines conditions for use
    // //threeHalfHours conditions

    // if (thisHoursPrograms.length === 3) {

    //     let threeHalfHours = [
    //         <ProgramBlock
    //             _css={"block two-to-three"}
    //             passId={passId}
    //             id={thisHoursPrograms[0].id}
    //             key={thisHoursPrograms[0].id}
    //             name={thisHoursPrograms[0].name}
    //         />,
    //         <ProgramBlock
    //             _css={"block three-to-four"}
    //             passId={passId}
    //             id={thisHoursPrograms[1].id}
    //             key={thisHoursPrograms[1].id}
    //             name={thisHoursPrograms[1].name}
    //         />,
    //         <ProgramBlock
    //             _css={"block four-to-five"}
    //             passId={passId}
    //             id={thisHoursPrograms[2].id}
    //             key={thisHoursPrograms[2].id}
    //             name={thisHoursPrograms[2].name}
    //         />
    //     ]

    //     let hourLeft_HalfHourRight = [
    //         <ProgramBlock
    //             _css={"block two-to-four"}
    //             passId={passId}
    //             id={thisHoursPrograms[0].id}
    //             key={thisHoursPrograms[0].id}
    //             name={thisHoursPrograms[0].name}
    //         />,
    //         <ProgramBlock
    //             _css={"block four-to-five"}
    //             passId={passId}
    //             id={thisHoursPrograms[1].id}
    //             key={thisHoursPrograms[1].id}
    //             name={thisHoursPrograms[1].name}
    //         />
    //     ]

    //     let halfHourLeft_HourRight = [
    //         <ProgramBlock
    //             _css={"block two-to-three"}
    //             passId={passId}
    //             id={thisHoursPrograms[0].id}
    //             key={thisHoursPrograms[0].id}
    //             name={thisHoursPrograms[0].name}
    //         />,
    //         <ProgramBlock
    //             _css={"block three-to-five"}
    //             passId={passId}
    //             id={thisHoursPrograms[1].id}
    //             key={thisHoursPrograms[1].id}
    //             name={thisHoursPrograms[1].name}
    //         />
    //     ]

    //     let full = [
    //         <ProgramBlock
    //             _css={"block full"}
    //             passId={passId}
    //             id={thisHoursPrograms[0].id}
    //             key={thisHoursPrograms[0].id}
    //             name={thisHoursPrograms[0].name}
    //         />
    //     ]

    //     if (thisHoursPrograms[0].length === "one-and-a-half-hours" &&
    //         thisHoursPrograms[1].length === "one-and-a-half-hours") {
    //         if (thisHoursPrograms[0].hour === hour && zeroOrThirty < 3
    //             && thisHoursPrograms[0].zOT === 3) {
    //             programElements = halfHourLeft_HourRight
    //         } else if ((thisHoursPrograms[0].hour === hour && zeroOrThirty < 3
    //             && thisHoursPrograms[0].zOT !== 3) || (thisHoursPrograms[0].hour === hour && zeroOrThirty >= 3
    //                 && thisHoursPrograms[0].zOT === 3)) {
    //             programElements = full
    //         } else if ((thisHoursPrograms[0].hour === hour && zeroOrThirty >= 3) || (thisHoursPrograms[0].hour ===
    //             (hour - 1) && zeroOrThirty < 3 && thisHoursPrograms[0].zOT === 3)) {
    //             programElements = hourLeft_HalfHourRight
    //         }
    //     } else if (thisHoursPrograms[0].length === "one-hour" && zeroOrThirty < 3) {
    //         programElements = hourLeft_HalfHourRight
    //     } else if (thisHoursPrograms[0].length === "one-hour" && zeroOrThirty >= 3) {
    //         programElements = threeHalfHours
    //     } else if (zeroOrThirty < 3 && thisHoursPrograms[0].length === "half-hour") {
    //         programElements = threeHalfHours
    //     } else if ((zeroOrThirty >= 3 && thisHoursPrograms[0].length === "one-hour")) {
    //         programElements = threeHalfHours
    //     } else if (zeroOrThirty >= 3 && thisHoursPrograms[1].length === "half-hour") {
    //         thisHoursPrograms.shift();
    //     }
    // }

    // if (thisHoursPrograms.length === 2) {

    //     let halfHourLeft_HourRight = [
    //         <ProgramBlock
    //             _css={"block two-to-three"}
    //             passId={passId}
    //             id={thisHoursPrograms[0].id}
    //             key={thisHoursPrograms[0].id}
    //             name={thisHoursPrograms[0].name}
    //         />,
    //         <ProgramBlock
    //             _css={"block three-to-five"}
    //             passId={passId}
    //             id={thisHoursPrograms[1].id}
    //             key={thisHoursPrograms[1].id}
    //             name={thisHoursPrograms[1].name}
    //         />
    //     ]

    //     let hourLeft_HalfHourRight = [
    //         <ProgramBlock
    //             _css={"block two-to-four"}
    //             passId={passId}
    //             id={thisHoursPrograms[0].id}
    //             key={thisHoursPrograms[0].id}
    //             name={thisHoursPrograms[0].name}
    //         />,
    //         <ProgramBlock
    //             _css={"block four-to-five"}
    //             passId={passId}
    //             id={thisHoursPrograms[1].id}
    //             key={thisHoursPrograms[1].id}
    //             name={thisHoursPrograms[1].name}
    //         />
    //     ]

    //     if (zeroOrThirty >= 3 && (thisHoursPrograms[0].length === "half-hour" || "one-hour")) {
    //         programElements = halfHourLeft_HourRight
    //     } else {
    //         programElements = hourLeft_HalfHourRight
    //     }

    // }

    //lift up the proper video ID onClick

    function passId(id) {
        passIdChann(id);
    }

    function sendThePrograms(arr) {
        sendPrograms(arr);
    }

    return (
        <div className="channel-strip-container">
            <Link
                to="/on-demand"
                className="name"
                onClick={() => sendThePrograms(schedule)}
            >
                <h4 className="number">{num}</h4>
                <h4 className="title">{channel}</h4>
            </Link>
            {/* {programElements.map(
                program => program
            )} */}
            {currentPrograms.map(program => (
                <ProgramBlock
                    _css={"block " + program.currentCSS}
                    passId={passId}
                    id={program.id}
                    key={program.id}
                    name={program.name}
                />
            ))}
        </div>
    )
}

export default ChannelStrip
