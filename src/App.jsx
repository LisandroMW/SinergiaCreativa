import React from 'react';
import Slider from "react-slick"
import CommissionsPage from './pages/CommissionsPage/CommissionsPage'
import ExamplePage from './pages/ExamplePage/ExamplePage'
import MonthlyGoalPage from './pages/MonthlyGoalPage/MonthlyGoalPage';
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
        {
            breakpoint: 768, // Para dispositivos de tamaño mediano
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480, // Para dispositivos más pequeños
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
    };

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Slider {...settings}>
                <div>
                    <CommissionsPage />
                </div>
                <div>
                    <MonthlyGoalPage />
                </div>
                
            </Slider>
        </div>
    );
};

export default App;