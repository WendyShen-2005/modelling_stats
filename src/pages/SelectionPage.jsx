import { useState } from "react";
import { multipleMultipleTrials } from "./functions/MultipleTrials";
import { oneMontyTrial } from "./functions/OneTrial";
import Graph from "./Graph";

const SelectionPage = ({setPage}) => {

    const [indvTrials, setIndvTrials] = useState(10);
    const [trialsTrials, setTrialsTrials] = useState(100);
    const [intervalSize, setIntervalSize] = useState(10);
    const [result, setResults] = useState(null);
    return (
        <div>
            <h1>Modelling various statistical problems</h1>
            <div>
                <label>Number of trials for individual trials (i.e: 1 trial = 100 flips of a coin)</label>
                <input type='number' defaultValue={10} onChange={(e) => setIndvTrials(e.target.value)}/>

                <label>Number of trials of trials (i.e: 100 trials of 100 flips of a coin)</label>
                <input type='number' defaultValue={100} onChange={(e) => setTrialsTrials(e.target.value)}/>

                <label>Size of intervals for graph (ex: 10 for 0%, 10%, 20%...)</label>
                <input type='number' defaultValue={10} onChange={(e) => setIntervalSize(e.target.value)}/>%
            </div>

            <button onClick={() => setResults(
                 multipleMultipleTrials(oneMontyTrial, indvTrials, trialsTrials, intervalSize)
                 )}>Run Trial</button>

            {/* {result} */}

            {result != null &&
                <Graph result={result}/>
            }
        </div>
    )
}
export default SelectionPage;