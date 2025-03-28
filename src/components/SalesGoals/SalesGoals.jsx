import React from "react";
import "./SalesGoals.css";

function SalesGoals({ goalAmount }) {
    const pricePerSale = 700000; 
    const commissionRate = 0.10; 

    const iWannaSale = goalAmount; 
    const iWannaSaleUSD = (goalAmount / 1071.15).toFixed(2); 

    
    const commissionPerSale = pricePerSale * commissionRate; 
    const salesNeeded = Math.ceil(goalAmount / commissionPerSale); 

    return (
        <div className="sales-goals">
            <div className="sales-goals-container">
                <div className="sales-goals-row">
                    <div className="sales-goals-label">Tengo que Vender (Pesos)</div>
                    <div className="sales-goals-value">${iWannaSale.toLocaleString()}</div>
                </div>
                <div className="sales-goals-row">
                    <div className="sales-goals-label">Se sumará un Volumen de carrera de</div>
                    <div className="sales-goals-value">${iWannaSaleUSD} USD</div>
                </div>
                <div className="sales-goals-row">
                    <div className="sales-goals-label">Total de ventas en un mes</div>
                    <div className="sales-goals-value">{salesNeeded}</div>
                </div>
            </div>
        </div>
    );
}

export default SalesGoals;