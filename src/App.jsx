import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"

export default function App() {
    return (
        <div className="card">
            <Info/>
            <About/>
            <Interests/>
        </div>
    )
}