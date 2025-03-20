import CustomInput from "../CustomInput/CustomInput"
import SalesSlider from "../SalesSlider/SalesSlider"
import HorizontalScrollCarousel from "../HorizontalScrollCarousel/HorizontalScrollCarousel"
import "./MonthlyGoal.css"

function MonthlyGoal(){
    return(
        <div className="monthly-goal">
            <div className="amount-container">
                <CustomInput text="Meta" id="amount" type="number"/>
            </div>
            <div className="horizontal-scroll-container">
                <HorizontalScrollCarousel />
            </div>
            
        </div>
    )
}

export default MonthlyGoal

