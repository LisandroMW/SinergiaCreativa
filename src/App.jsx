import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import CommissionsPage from './pages/CommissionsPage/CommissionsPage';
import MonthlyGoalPage from './pages/MonthlyGoalPage/MonthlyGoalPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    const sliderRef = useRef(null); 

    const handleButtonClickCommission = () => {
        console.log("Botón clickeado, cambiando al slide 1...");
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(1); 
        }
    };

    const handleButtonClickMonthlyGoal = () =>{
        console.log("Botón clickeado, cambiando al slide 2...");
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0);
    }
}


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        afterChange: (index) => console.log("Slide cambiado a:", index),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div style={{ width: '100%', height: '100vh' }}>
                        <Slider ref={sliderRef} {...settings}> 
                            <div>
                                <CommissionsPage goToNextSlide={handleButtonClickCommission} />
                            </div>
                            <div>
                                <MonthlyGoalPage goToBackSlide={handleButtonClickMonthlyGoal}/>
                            </div>
                        </Slider>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;