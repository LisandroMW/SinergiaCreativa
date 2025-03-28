import "./Commissions.css";
import CustomInput from "../CustomInput/CustomInput";
import MonthSelect from "../MonthSelect/MonthSelect";
import ActualCommission from "../ActualCommission/ActualCommission";
import TicketSelect from "../TicketSelect/TicketSelect";
import Result from "../Result/Result";
import CustomButton from "../CustomButton/CustomButton";

function Commissions({ goToNextSlide }) {
    return (
        <div className="commissions">
            <div className="labels-inputs">
                <CustomInput text="Nombre de Socio/a" id="partner-name" type="text" />
                <MonthSelect label="Mes" id="Month" placeholder="Selecciona un mes" />
                <CustomInput text="Mi ticket Promedio en USD" id="average-ticket" type="number" />
                <CustomInput text="Valor USD (Valor de cambio)" id="USD-value" type="number" />
            </div>
            <div className="actual-commission-container">
                <ActualCommission />
            </div>
            <div className="ticket-container">
                <TicketSelect label="Ticket de Venta" id="ticket" placeholder="Selecciona un ticket" />
            </div>
            <div className="result-container">
                <Result />
            </div>
            <div className="button-container">
                <CustomButton text="Metas" onClick={goToNextSlide} />
            </div>
        </div>
    );
}

export default Commissions;