const Graph = ({result, setHoverInfo}) => {
    const h = 320;
    const total = result.total || 1;
    return (
        <div style={{display:'flex', alignItems:'flex-end'}}>
            <div className="y-axis" style={{marginRight:12}}>
                <div style={{height:h + 'px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <span>{result.max}</span>
                    <span>{Math.round(result.max/2)}</span>
                    <span>0</span>
                </div>
            </div>

            <div style={{display:'flex', alignItems:'flex-end'}}>
                {result.vals.map((val, i) => {
                    const height = Math.max(2, Math.round(val / total * h));
                    const percent = Math.round(i/(result.vals.length -1) * 100);
                    return (
                        <div key={i} style={{textAlign:'center'}}>
                            <div
                                role="button"
                                className="bar"
                                onClick={() => setHoverInfo({percent:percent, number:val})}
                                style={{height: height + 'px'}}
                            />
                            <div style={{fontSize:12, color:'var(--muted)', marginTop:6}}>{percent}%</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Graph;