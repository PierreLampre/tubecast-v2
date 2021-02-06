import React from 'react'
import "./channel-strip.css"

const ProgramBlock = (props) => {
    return (
        <div to="/pv"
            className={props._css}
            onClick={() => props.passId(props.id)}
        >
            <h4>{props.name}</h4>
        </div>
    )
}

export default ProgramBlock
