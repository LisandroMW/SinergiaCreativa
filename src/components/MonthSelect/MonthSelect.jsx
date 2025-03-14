import React from 'react';
import './MonthSelect.css';

function MonthSelector({ label, id, placeholder }) {
    return (
        <div className="input-container">
            <label className="label" htmlFor={id}>{label}</label>
            <select id={id} className="custom-select">
                <option value="" disabled>{placeholder}</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
            </select>
        </div>
    );
}

export default MonthSelector;