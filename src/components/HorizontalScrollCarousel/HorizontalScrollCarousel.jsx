import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./HorizontalScrollCarousel.css";

const cards = [
  {
    text: "Tengo que vender",
    cantidad: "5555",
    id: 1,
  },
  {
    text: "Me sumarán un Volumen en carrera de",
    cantidad: "5555",
    id: 2,
  },
  {
    text: "Total de ventas en el mes",
    cantidad: "5555",
    id: 3,
  },
];

function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="scroll-section">
      <div className="sticky-container">
        <motion.div style={{ x }} className="card-container">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="card-text">{card.text}</p>
        <p className="card-amount">{card.cantidad}</p>
      </div>
    </div>
  );
}

export default HorizontalScrollCarousel;


/*function HorizontalScrollCarousel() {
    return (
        <section className="scroll-section">
            <div className="scroll-div">
                <div className="item">Elemento 1</div>
                <div className="item">Elemento 2</div>
                <div className="item">Elemento 3</div>
                <div className="item">Elemento 4</div>
            </div>
        </section>
    );
}*/