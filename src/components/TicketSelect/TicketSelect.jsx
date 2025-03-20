import React from 'react';
import "./TicketSelect.css"
import { Link } from 'react-router-dom';


function TicketSelect({ label, id, placeholder }) {
    return (
        <div className="select-ticket-container">
            <label className="label" htmlFor={id}>{label}</label>
            <select id={id} className="custom-select">
                <option value="" disabled>{placeholder}</option>
                <option value="01">Producto A</option>
                <option value="02">Producto B</option>
                <option value="03">Producto C</option>
                <option value="04">Producto D</option>
                <option value="05">Producto E</option>
            </select>
        </div>
    );
}

export default TicketSelect;