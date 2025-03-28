import NavBar from "../../components/NavBar/NavBar";
import Commissions from "../../components/Commissions/Commissions";
import "./CommissionsPage.css";

function CommissionsPage({ goToNextSlide }) {
    return (
        <div className="commissions-page-container">
            <NavBar text="Asistente de Ventas Mensuales" />
            <Commissions goToNextSlide={goToNextSlide} />
        </div>
    );
}

export default CommissionsPage;