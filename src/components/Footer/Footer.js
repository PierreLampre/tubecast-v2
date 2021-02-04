import React from 'react'
import hire_me from "./img/hireme.gif"
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <a
                href="https://github.com/PierreLampre"
                target="_blank"
                rel="noreferrer"
            >
                <img src={hire_me} alt="A gif begging someone to hire me." />
            </a>
        </div>
    )
}

export default Footer
