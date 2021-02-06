import React from 'react'
import OnDemandButton from "./OnDemandButton/OnDemandButton"
import uniqid from "uniqid"
import "./on-demand.css"

const OnDemand = ({ programs, toggleTheView, passId }) => {

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

    for (let i = 0; i < programs.length; i++) {
        for (let j = 0; j < uniqueProgramObjects.length; j++) {
            if (programs[i].name === uniqueProgramObjects[j].name) {
                uniqueProgramObjects[j].ids.push(programs[i].id)
            }
        }
    }

    for (let i = 0; i < uniqueProgramObjects.length; i++) {
        //evens
        if (i % 2 === 0) {
            programsLeft.push(uniqueProgramObjects[i]);

            //odds
        } else {
            programsRight.push(uniqueProgramObjects[i]);
        }
    }

    function passTheId(id) {
        passId(id);
    }

    return (
        <div className="on-demand-container">
            <div className="left">
                {programsLeft.map(program => (
                    <OnDemandButton
                        name={program.name}
                        ids={program.ids}
                        key={uniqid()}
                        passId={passTheId}
                    />
                ))}
            </div>
            <div className="right">
                {programsRight.map(program => (
                    <OnDemandButton
                        name={program.name}
                        ids={program.ids}
                        key={uniqid()}
                        passId={passTheId}
                    />
                ))}
            </div>
        </div>
    )
}

export default OnDemand
