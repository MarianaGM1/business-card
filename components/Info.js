import React from "react"

export default function Info() {
    return (
        <div>
            <div className="info-photo-container">
                <img src="../images/photo.jpg" alt="" className="photo"/>
            </div>
            <div className="info-text">
                <h1>Mariana Grisales</h1>
                <p className="info-subtitle">Frontend Developer</p>
                <p className="personal-website">github.com/MarianaGM1</p>
                <div>
                    <button className="button-light"><img src="../images/github.png" className="icon"/>GitHub</button>
                    <a href="https://www.linkedin.com/in/marianagrisalesmunoz/"><button className="button-contrast"><img src="../images/linked-in.svg" className="linkedin-icon icon"/>LinkedIn</button></a>
                </div>
            </div>
        </div>
    )
}