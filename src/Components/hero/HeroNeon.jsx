import { useEffect } from "react"
import "../../Components/hero/heroNeon.css"
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

export default function HeroNeon() {

    useEffect(() => {
        neonCursor({
            el: document.getElementById('neon'),
            shaderPoints: 16,
            curvePoints: 80,
            curveLerp: 0.5,
            radius1: 5,
            radius2: 30,
            velocityTreshold: 10,
            sleepRadiusX: 100,
            sleepRadiusY: 0,
            sleepTimeCoefX: 0.0025,
            sleepTimeCoefY: 0.0025
        })
    }, [])

    return (
        <section id="hero-background" className="">
            <div id="neon">
                <div id="hero" style={{width: "100%"}}>
                    <h2>WELCOME</h2>
                </div>   
            </div>
        </section>


    )
}