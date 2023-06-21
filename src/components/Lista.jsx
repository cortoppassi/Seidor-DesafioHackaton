import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { FeedbackContext } from '../FeedbackContext';
import './lista.css';

export default function Lista() {
  const { feedbacks } = useContext(FeedbackContext);
  const [filtro, setFiltro] = useState("");

  // Função para filtrar os feedbacks com base no nome e departamento
  const filtrarFeedbacks = (feedback) => {
    const nomeFuncionario = feedback.nomeFuncionario.toLowerCase();
    const departamento = feedback.departamento.toLowerCase();
    const filtroLower = filtro.toLowerCase();

    return (
      nomeFuncionario.includes(filtroLower) || departamento.includes(filtroLower)
    );
  };

  // Filtra os feedbacks com base no valor do filtro
  const feedbacksFiltrados = feedbacks.filter(filtrarFeedbacks);

  return (
    <div className="container">
      <div className="input-container">
        <Link to="/">
          <img src="https://nerdin.com.br/img/empresa/2422.png" style={{ width: '30%'}} />
        </Link>
        <div>
          <input
            type="text"
            name="filtro"
            className="input-field"
            placeholder="Search"
            id="inputTxt"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
          <button type="submit" className="submit-button">
            Filtrar
          </button>
        </div>
        <div>
          <Link to="/feedback" className="submit-button">
            Novo Feedback
          </Link>
        </div>
      </div>
      <hr/>
      <div className="containerLista">
        {/* <h2 className="title">Feedbacks Cadastrados</h2> */}
        <div className="lista">
            <ul>
              {feedbacksFiltrados.map((feedback, index) => (
                <li key={index}>
                  <p>Nome do Funcionário: {feedback.nomeFuncionario}</p>
                  <p>Departamento: {feedback.departamento}</p>
                  <p>Data do Feedback: {feedback.dataFeedback}</p>
                  <p>Tipo de Feedback: {feedback.descricao}</p>
                  <p>Solução de problemas: {feedback.solucaoProblemas}</p>
                  <p>Atenção aos detalhes: {feedback.atencaoDetalhes}</p>
                  <p>Análise/Raciocínio: {feedback.analiseRaciocinio}</p>
                  <p>Responsabilidade e confiabilidade: {feedback.responsabilidadeConfiabilidade}</p>
                  <p>Adaptabilidade e Flexibilidade: {feedback.adaptabilidadeFlexibilidade}</p>
                  <p>Trabalho em equipe: {feedback.trabalhoEquipe}</p>
                </li>
              ))}
            </ul>
        </div>
        
      </div>
    </div>
  );
}

