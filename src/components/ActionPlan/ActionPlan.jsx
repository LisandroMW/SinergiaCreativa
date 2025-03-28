import React from "react";
import "./ActionPlan.css"; 

function ActionPlan({ totalSales, closingRate }) {
    

    const nuevosProspectos = totalSales * 6; 
    const minPresentacionesPorMes = totalSales / closingRate; 
    const minPresentacionesPorSemana = Math.ceil(minPresentacionesPorMes / 4) + 1; 
    const horasCapacitacion = 20; 

    return (
        <div className="action-plan">
            <div className="action-plan-container">
                <h2 className="action-plan-title">Tu Plan de Acción desde Hoy</h2>
                <div className="action-plan-row">
                    <div className="action-plan-label">Nuevos Prospectos a Prospectar</div>
                    <div className="action-plan-value">{nuevosProspectos}</div>
                </div>
                <div className="action-plan-row">
                    <div className="action-plan-label">Mínimo de Presentaciones por Mes</div>
                    <div className="action-plan-value">{minPresentacionesPorMes.toFixed(2)}</div>
                </div>
                <div className="action-plan-row">
                    <div className="action-plan-label">Mínimo de Presentaciones por Semana</div>
                    <div className="action-plan-value">{minPresentacionesPorSemana}</div>
                </div>
                <div className="action-plan-row">
                    <div className="action-plan-label">Horas de Capacitación</div>
                    <div className="action-plan-value">{horasCapacitacion}</div>
                </div>
            </div>
        </div>
    );
}

export default ActionPlan;