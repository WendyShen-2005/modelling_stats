const BarHoverInfo = ({info}) => {
    if(!info) return null;
    return (
        <div className="card" style={{display:'inline-block', padding:'10px 14px'}}>
            <div style={{fontWeight:700}}>{info.percent}%</div>
            <div style={{color:'var(--muted)'}}>Count: {info.number}</div>
        </div>
    )
}

export default BarHoverInfo