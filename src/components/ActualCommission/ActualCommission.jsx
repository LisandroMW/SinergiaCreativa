import "./ActualCommission.css"

function ActualCommission(){
    return(
        <div className="container">
            <label htmlFor="volume" className="label">Comisión Actual</label>
            <input className="input" type="range" id="volume" min="0" max="100"/>
        </div>
    )
}

export default ActualCommission