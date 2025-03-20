import React from "react"
import Slider from "react-slick"
import "./SalesSlider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SalesSlider(){

    const salesData = [
        { label: "Tengo que vender (Pesos)", amount: "10,000" },
        { label: "Se sumará al volumen de carrera", amount: "500" },
        { label: "Total de ventas al mes (Pesos)", amount: "10,500" },
        { label: "Número de ventas", amount: "5" },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return(<div>Slider</div>)
    /*
    return (
        <div className="sales-slider">
        {salesData.map((data, index) => (
            <div key={index}>
                <h3>{data.label}</h3>
                <p>{data.amount}</p>
            </div>
        ))}
    </div>
    )*/

    /* return (
        <div className="sales-slider">
            <Slider {...settings}>
                {salesData.map((data, index) => (
                    <div className="slide" key={index}>
                        <h3>{data.label}</h3>
                        <p>{data.amount}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )  */  
    
}

export default SalesSlider