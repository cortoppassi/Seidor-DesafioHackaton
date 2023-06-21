import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="logo">
          <img src="https://nerdin.com.br/img/empresa/2422.png" alt="" />
        </div>

        <div className="title">
          <p>
            Bem-vindo à Avaliação de Desempenho! Esta é uma oportunidade para refletir sobre o desempenho e as competências de nossos colaboradores, reconhecendo suas realizações e identificando áreas para crescimento e desenvolvimento. Durante a avaliação, serão exploradas diferentes áreas de competência, como habilidades técnicas, comportamentais e outros aspectos relevantes para o desempenho em nossa organização. Sua participação ativa e honesta é fundamental para uma avaliação significativa e eficaz.
          </p>
          <div className="button">
            <Link to="/feedback" className="submit-button">
              Novo Feedback
            </Link>
            
            <Link to="/lista" className="submit-button">
              Meus Feedbacks
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
