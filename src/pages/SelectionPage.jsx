import { useState } from "react";
import { multipleMultipleTrials } from "./functions/MultipleTrials";
import { oneMontyTrial } from "./functions/OneTrial";
import Graph from "./Graph";
import BarHoverInfo from "./BarHoverInfo";

const SelectionPage = ({setPage}) => {

    const [indvTrials, setIndvTrials] = useState(10);
    const [trialsTrials, setTrialsTrials] = useState(100);
    const [intervalSize, setIntervalSize] = useState(10);
    const [result, setResults] = useState(null);

    const [hoverInfo, setHoverInfo] = useState(null);

    return (
        <div>
            <h1>Modelling various statistical problems</h1>
            <p style={{textDecoration:"line-through"}}>(for now, just Monty Hall problem)</p>
            <div>
                <label>Number of trials for individual trials (i.e: 1 trial = 100 flips of a coin)</label>
                <br/>
                <input type='number' defaultValue={10} onChange={(e) => setIndvTrials(e.target.value)}/>

                <br/>
                <br/>


                <label>Number of trials of trials (i.e: 100 trials of 100 flips of a coin)</label>
                <br/>
                <input type='number' defaultValue={100} onChange={(e) => setTrialsTrials(e.target.value)}/>

                <br/>
                <br/>


                <label>Size of intervals for graph (ex: 10 for 0%, 10%, 20%...)</label>
                <br/>
                <input type='number' defaultValue={10} onChange={(e) => setIntervalSize(e.target.value)}/>%
            </div>
            <br/>

            <button onClick={() => setResults(
                 multipleMultipleTrials(oneMontyTrial, indvTrials, trialsTrials, intervalSize)
                 )}>Run Trial</button>

            {/* {result} */}


                {result != null && <>
                        <hr/>
                        {hoverInfo != null && <BarHoverInfo info={hoverInfo}/>}
                        <br/><br/>
                        <div style={{textAlign:"center", width:"100%"}}>Monty Hall Problem</div>
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <Graph setHoverInfo={setHoverInfo} result={result}/>
                        </div>
                    </>}

        </div>
    )
}
export default SelectionPage;