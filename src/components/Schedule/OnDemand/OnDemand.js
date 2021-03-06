import React from 'react'
import OnDemandButton from "./OnDemandButton/OnDemandButton"
import uniqid from "uniqid"
import "./on-demand.css"

const OnDemand = ({ programs, passId, passEpisodeList }) => {

    let justTheNames = [];
    let uniqueProgramObjects = [];
    let programComponents = [];
    let programsLeft = [];
    let programsRight = [];

    // get just the program names
    for (let i = 0; i < programs.length; i++) {
        justTheNames.push(programs[i].name);
    }

    //remove duplicate names
    let uniqueNames = [...new Set(justTheNames)];

    uniqueNames = uniqueNames.sort();

    //create shell objects
    uniqueProgramObjects = uniqueNames.map(name => (
        {
            "name": name,
            "ids": []
        }
    ))

    //put all programs ids in the shell objects with matching name.
    for (let i = 0; i < programs.length; i++) {
        for (let j = 0; j < uniqueProgramObjects.length; j++) {
            if (programs[i].name === uniqueProgramObjects[j].name) {
                uniqueProgramObjects[j].ids.push(programs[i].id)
            }
        }
    }

    function passTheId(id) {
        passId(id);
    }

    function passTheEpisodeList(obj) {
        passEpisodeList(obj)
    }

    //build components
    for (let i = 0; i < uniqueProgramObjects.length; i++) {
        programComponents.push(
            <OnDemandButton
                name={uniqueProgramObjects[i].name}
                ids={uniqueProgramObjects[i].ids}
                passId={passTheId}
                passEpisodeList={passTheEpisodeList}
                key={uniqid()}
            />
        );
    }

    //make two rows of them
    for (let i = 0; i < programComponents.length; i++) {
        //evens
        if (i % 2 === 0) {
            programsLeft.push(programComponents[i]);

            //odds
        } else {
            programsRight.push(programComponents[i]);
        }
    }

    return (
        <div className="on-demand-container">
            <div className="left">
                {programsLeft.map(program => program)}
            </div>
            <div className="right">
                {programsRight.map(program => program)}
            </div>
        </div>
    )
}

export default OnDemand
