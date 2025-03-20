import NavBar from "../../components/NavBar/NavBar"
import Commissions from "../../components/Commissions/Commissions"
import "./CommissionsPage.css"

function CommissionsPage(){
    return(
        <div className="commissions-page-container">
            <NavBar text="Asistente de Ventas Mensuales"/>
            <Commissions/>
        </div>
    )
}

export default CommissionsPage