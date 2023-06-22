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
    <div className="listaDeFeedBack">
      <div className= "container">
        <div className="logo">
          <Link to="/">
            <img src="https://nerdin.com.br/img/empresa/2422.png" alt="Logo" />
          </Link>
        </div>  
        <div className="">
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
      <div className="containerLista">
        <div className="lista">
          <ul>
            {feedbacksFiltrados.map((feedback, index) => (
              <li key={index}>
                <h5>Nome do Funcionário: {feedback.nomeFuncionario}</h5>
                <h5>Departamento: {feedback.departamento}</h5>
                <h5>Data do Feedback: {feedback.dataFeedback}</h5>
                <h5>Descrição: {feedback.descricao}</h5>
                <h5>Solução de problemas: {feedback.solucaoProblemas}</h5>
                <h5>Atenção aos detalhes: {feedback.atencaoDetalhes}</h5>
                <h5>Análise/Raciocínio: {feedback.analiseRaciocinio}</h5>
                <h5>Responsabilidade e confiabilidade: {feedback.responsabilidadeConfiabilidade}</h5>
                <h5>Adaptabilidade e Flexibilidade: {feedback.adaptabilidadeFlexibilidade}</h5>
                <h5>Trabalho em equipe: {feedback.trabalhoEquipe}</h5>
                <div>
                  <button onClick={() => handleEditarFeedback(feedback)} className="botoes">Editar</button>
                  <button onClick={() => handleExcluirFeedback(feedback)} className="botoes">Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
