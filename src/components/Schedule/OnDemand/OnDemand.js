import React from 'react'
import OnDemandButton from "./OnDemandButton/OnDemandButton"
import "./on-demand.css"

const OnDemand = ({ programs, toggleTheView }) => {

    let programsLeft = [];
    let programsRight = [];

    for (let i = 0; i < programs.length; i++) {
        if(i % 2 === 0) {
            programsLeft.push(programs[i]);
        } else {
            programsRight.push(programs[i]);
        }
    }
    console.log(programs.length)
    console.log(programsLeft.length)
    console.log(programsRight.length)

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
               {programsLeft.map( program => (
                <OnDemandButton
                    name={program.name.length > 19
                          ?
                          program.name.slice(0, 19)
                          :
                          program.name
                          }
                />
            ))} 
            </div>
            <div className="right">
            {programsRight.map( program => (
                <OnDemandButton
                    name={program.name.length > 19
                        ?
                        program.name.slice(0, 19)
                        :
                        program.name}
                />
            ))} 
            </div>
        </div>
    )
}

export default OnDemand
