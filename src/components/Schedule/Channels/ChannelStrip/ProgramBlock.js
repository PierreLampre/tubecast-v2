import React from 'react'
import { Link } from "react-router-dom"
import "./channel-strip.css"

const ProgramBlock = (props) => {
    return (
        <Link to="/pv"
            className={props._css}
            onClick={() => props.passId(props.id)}
        >
            <h4>{props.name}</h4>
        </Link>
    )
}

export default ProgramBlock
