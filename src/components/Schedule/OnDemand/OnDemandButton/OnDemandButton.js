import React from 'react'
import { Link } from "react-router-dom"
import "./on-demand-button.css"

const OnDemandButton = ({ name, ids, passId, passEpisodeList }) => {

    function passTheId(id) {
        passId(id);
    }

    function passTheEpisodeList(obj) {
        passEpisodeList(obj)
    }

    return (
        {
            ...ids.length === 1
                ?
                <button
                    className="on-demand-button"
                    onClick={() => passTheId(ids[0])}
                >
                    {name}
                </button>
                :
                <Link
                    to="/episode-library"
                    className="on-demand-button"
                    onClick={() => passTheEpisodeList({ name, ids })}
                >
                    {name}
                </Link>
        }
    )
}

export default OnDemandButton
