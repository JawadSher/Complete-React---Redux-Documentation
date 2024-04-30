let ClockDate = ()=>{
        let time = new Date();
    return <div className="time-container">
        <span style={{fontWeight:"600"}}>{time.toLocaleDateString()} - {time.toLocaleTimeString()}</span>
    </div>
}

export default ClockDate;
