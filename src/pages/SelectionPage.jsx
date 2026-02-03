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

    const run = () => {
        const i = parseInt(indvTrials) || 10;
        const t = parseInt(trialsTrials) || 100;
        const s = parseInt(intervalSize) || 10;
        const res = multipleMultipleTrials(oneMontyTrial, i, t, s);
        setResults(res);
    }

    return (
        <div>
            <div className="container card">
                <h2>Modelling various statistical problems</h2>
                <p style={{marginTop:0, color:"var(--muted)"}}>Monty Hall simulation and distribution visualiser</p>

                <div style={{marginTop:16}} className="controls">
                    <div>
                        <label>Trials per experiment</label>
                        <input type='number' value={indvTrials} onChange={(e) => setIndvTrials(e.target.value)}/>
                    </div>

                    <div>
                        <label>Number of experiments</label>
                        <input type='number' value={trialsTrials} onChange={(e) => setTrialsTrials(e.target.value)}/>
                    </div>

                    <div>
                        <label>Interval size (%)</label>
                        <input type='number' value={intervalSize} onChange={(e) => setIntervalSize(e.target.value)}/>%
                    </div>

                    <div style={{alignSelf:'flex-end'}}>
                        <button onClick={run}>Run Trial</button>
                    </div>
                </div>

                {result != null && <>
                    <hr style={{margin:'20px 0'}}/>
                    {hoverInfo != null && <BarHoverInfo info={hoverInfo}/>}
                    <h3 style={{marginTop:8}}>Monty Hall Problem</h3>
                    <div className="graph-wrapper card">
                        <Graph setHoverInfo={setHoverInfo} result={result}/>
                    </div>
                </>}

            </div>
        </div>
    )
}
export default SelectionPage;