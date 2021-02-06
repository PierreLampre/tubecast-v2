import React from 'react'
import OnDemandButton from "./OnDemandButton/OnDemandButton"
import uniqid from "uniqid"
import "./on-demand.css"

const OnDemand = ({ programs, toggleTheView }) => {

    let justTheNames = [];
    let programsLeft = [];
    let programsRight = [];
    let uniqueProgramObjects = [];

    for (let i = 0; i < programs.length; i++) {
        justTheNames.push(programs[i].name);
    }

    let uniqueNames = [...new Set(justTheNames)];

    uniqueNames = uniqueNames.sort();

    uniqueProgramObjects = uniqueNames.map(name => (
        {
            "name": name,
            "ids": []
        }
    ))

    for (let i = 0; i < uniqueNames.length; i++) {
        //evens
        if (i % 2 === 0) {
            programsLeft.push(uniqueNames[i]);
            //odds
        } else {
            programsRight.push(uniqueNames[i]);
        }
    }

    return (
        <div className="on-demand-container">
            <div className="od-button-box">
                <button
                    className="od-go-back"
                    onClick={() => toggleTheView()}
                >
                    Go Back</button>
            </div>
            <div className="left">
                {programsLeft.map(programName => (
                    <OnDemandButton
                        name={programName}
                        key={uniqid()}
                    />
                ))}
            </div>
            <div className="right">
                {programsRight.map(programName => (
                    <OnDemandButton
                        name={programName}
                        key={uniqid()}
                    />
                ))}
            </div>
        </div>
    )
}

export default OnDemand
