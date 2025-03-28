import React from 'react';
import Slider from 'react-slick'
import Card from "../Card/Card"
import './HorizontalScroll.css'

const HorizontalScroll = () => {
  const cards = [
    {
        title: "Tengo que Vender (Pesos)",
        amout: "$6388800"
    },
    {
        title: "Me sumará un Volumen de Carrera de ",
        amout: "6.500usd"
    },
    {
        title: "Total de Ventas en un Mes",
        amout: "6,4"
    }
    ]

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="horizontal-scroll">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="scroll-item">
            <Card title={card.title} amout={card.amout} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalScroll;