import React, { useState } from "react"
import CustomInput from "../CustomInput/CustomInput"
import SalesGoals from "../SalesGoals/SalesGoals"
import ActionPlan from "../ActionPlan/ActionPlan"

import "./MonthlyGoal.css"
import CustomButton from "../CustomButton/CustomButton"

function MonthlyGoal({goToBackSlide}){

    const [goalAmount, setGoalAmount] = useState(0) 

    const closingRate = 0.3

    const getSalesNeeded = (amount) => {
        const pricePerSale = 700000; 
        const commissionRate = 0.10; 
        const commissionPerSale = pricePerSale * commissionRate; 
        return Math.ceil(amount / commissionPerSale);
    };

    const salesNeeded = getSalesNeeded(goalAmount);


    return(
        <div className="monthly-goal">
            <div className="amount-container">
                <CustomInput text="Meta" id="amount" type="number" value={goalAmount} onChange={(e) => setGoalAmount(Number(e.target.value))}/>
            </div>
            <div className="sales-goals-container">
                <SalesGoals goalAmount={goalAmount}/>
            </div>
            <div className="action-plan-container">
                <ActionPlan totalSales={salesNeeded} closingRate={closingRate}/>
            </div>
            <div className="button-container">
                <CustomButton text="Volver" onClick={goToBackSlide}/>
            </div>

        </div>
    )
}

export default MonthlyGoal

