const Graph = ({result}) => {
    const h = 500;
    const yAxisH = parseInt(result.max / result.total * h);
    const numYAxisVals = parseInt(yAxisH / 25);
    // const numYAxisVals = 2;
    console.log("y axis" + yAxisH + " val: " + result.max)
    return (
        <div>
            <div style={{display:"flex", height:h + "px", margin:"auto"}}>
                {/* y-axis */}
                <div style={{height:yAxisH + "px", marginTop: (h - yAxisH) + "px", display:"flex", flexDirection:"column", justifyContent:"space-between"
                }}>
                    {Array(result.max).fill(0).map((val, i) =>{
                            if(parseInt(i / numYAxisVals * 10)%10 == 0)
                                return <p style={{margin:"0", textAlign:"right"}} key={i}>{(result.max - 1 - i)}</p>
                        })
                    }
                </div>
                {result.vals.map((val, i) => {
                    const height = parseInt(val / result.total * h);
                    const topMargin = h - height;

                    {console.log(height + " " + val)}
                    return <div key={i} style={{height:height + "px", width:"25px", border:"1px solid red", 
                        marginRight:"10px", marginTop:topMargin + "px"}}/>
                })}
            </div>
        </div>
    )
}
export default Graph;