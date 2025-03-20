import MonthlyGoal from "../../components/MonthlyGoal/MonthlyGoal"
import "./MonthlyGoalPage.css"

function MonthlyGoalPage(){
    return(
        <div className="monthly-goal-page-container">
            <nav className="goal-navbar" aria-label="Navegación de objetivos">
                <h1 className="goal-navbar-title">Objetivo</h1>
                <p className="goal-navbar-subtitle">¿Cuanto quiero ganar este mes con mi venta personal?</p>
            </nav>
            <MonthlyGoal />
        </div>
    )
}

export default MonthlyGoalPage