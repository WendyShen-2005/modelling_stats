import { useState } from "react"

const BarHoverInfo = ({info}) => {

    return (
        <div style={{
            // position:"absolute", 
        border:"1px solid black",
        background:"white",
        borderRadius:"5px",
        padding:"5px"}}>
            <p>Percentage interval: {info.percent}</p>
            <p># of trials with this percentage: {info.number} </p>
        </div>
    )
}

export default BarHoverInfo