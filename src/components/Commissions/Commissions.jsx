import "./Commissions.css"
import CustomInput from "../CustomInput/CustomInput"
import MonthSelector from "../MonthSelect/MonthSelect"

function Commissions(){
    return(
        <div className="labels-inputs">
            <CustomInput text="Nombre de Socio/a" id="partner-name" type="text"/>
            <MonthSelector label="Mes" id="birthMonth" placeholder="Selecciona un mes"/>
            <CustomInput text="Mi ticket Promedio en USD" id="average ticket" type="number"/>
            <CustomInput text="Valor USD (Valor de cambio)" id="USD value" type="number"/>            
        </div>
        
    )
}

export default Commissions