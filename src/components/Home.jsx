import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="https://nerdin.com.br/img/empresa/2422.png" alt="" />
        </div>
        <div className="button">
            <Link to="/feedback" className="submit-button">
              Novo Feedback
            </Link>
            
            <Link to="/lista" className="submit-button">
              Meus Feedbacks
            </Link>
        </div>
      </div>
      <div className="title">
          <h1>Bem-vindo à Avaliação de Desempenho!</h1>
          <br/>
          <p className="txtHome">
          Esta é uma oportunidade para refletir sobre o desempenho e as competências de nossos colaboradores, reconhecendo suas realizações e identificando áreas para crescimento e desenvolvimento. Durante a avaliação, serão exploradas diferentes áreas de competência, como habilidades técnicas, comportamentais e outros aspectos relevantes para o desempenho em nossa organização. Sua participação ativa e honesta é fundamental para uma avaliação significativa e eficaz.
          </p>
          
        </div>
    </>
  );
};

export default Home;
