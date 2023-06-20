import React, { useState } from 'react';
import StarRating from './components/StarRating';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [tipoFeedback, setTipoFeedback] = useState('');
  const [tecnicasVisivel, setTecnicasVisivel] = useState(false);
  const [comportamentaisVisivel, setComportamentaisVisivel] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nomeFuncionario = event.target.nomeFuncionario.value;
    const departamento = event.target.departamento.value;
    const dataFeedback = event.target.dataFeedback.value;
    const descricao = event.target.descricao.value;

    const newFeedback = {
      nomeFuncionario,
      departamento,
      dataFeedback,
      tipoFeedback,
      descricao,
    };

    setFeedbacks([...feedbacks, newFeedback]);

    event.target.reset();
    setTipoFeedback('');
    setTecnicasVisivel(false);
    setComportamentaisVisivel(false);
  };

  const handleTipoFeedbackChange = (event) => {
    const selectedTipoFeedback = event.target.value;
    setTipoFeedback(selectedTipoFeedback);
    setTecnicasVisivel(selectedTipoFeedback === 'habilidades');
    setComportamentaisVisivel(selectedTipoFeedback === 'trabalho');
  };

  return (
    <>
      <div className='feedback'>
        <img src="https://nerdin.com.br/img/empresa/2422.png" alt="" />
        <div className='formularioFeedback'>
          <h2>Avaliação de desempenho</h2>
          <form onSubmit={handleSubmit}>
            <label>Nome do Funcionário:</label>
            <input type="text" name="nomeFuncionario" required />
            <label>Departamento:</label>
            <input type="text" name="departamento" required />
            <label>Data do Feedback:</label>
            <input type="date" name="dataFeedback" required />
            <label>Tipo de Feedback:</label>
            <select name="tipoFeedback" value={tipoFeedback} onChange={handleTipoFeedbackChange} required>
              <option value="">Selecione...</option>
              <option value="habilidades">Competências Técnicas</option>
              <option value="trabalho">Competências Comportamentais</option>
            </select>
            <label>Descrição (Opcional):</label>
            <textarea name="descricao" placeholder="Digite aqui seu feedback... Utilize suas palavras de forma cuidadosa e respeitosa, oferecendo sugestões valiosas para o aperfeiçoamento mútuo."  rows="4" cols="20"></textarea> 
            <button type="submit" className="submit-button">
              Enviar Feedback
            </button>
          </form>
        </div>
        <div className='questionario'>
          {tecnicasVisivel && (
            <>
              <h2>Competências Técnicas</h2>
              <h3>Por favor, avalie o cumprimento destes requisitos em uma escala de 1 a 5, onde 1 representa um cumprimento insatisfatório e 5 representa um cumprimento excepcional.</h3>
              <div>
              <p>
              Solução de problemas: Examina dados para compreender questões, tirar conclusões e resolver problemas.
              </p>
              <StarRating/>
              <p>
              Atenção aos detalhes: Atende com diligência os detalhes e busca a qualidade na execução das tarefas.
              </p>
              <StarRating/>
              <p>
              Análise/Raciocínio: Examina dados para compreender questões, tirar conclusões e resolver problemas.
              </p>
              <StarRating/>
              </div>
            </>
          )}
            {comportamentaisVisivel && (
              <>
                <h2>Competências Comportamentais</h2>
                <h3>Por favor, avalie o cumprimento destes requisitos em uma escala de 1 a 5, onde 1 representa um cumprimento insatisfatório e 5 representa um cumprimento excepcional.</h3>
                <div>
                <p>
                Responsabilidade e confiabilidade: Assume responsabilidade pessoal pela qualidade e pontualidade do trabalho e alcança resultados com pouca 
                  supervisão.
                </p>
                <StarRating/>
                <p>
                Adaptabilidade e Flexibilidade: Se adapta às necessidades, condições e responsabilidades do trabalho em constante mudança.
                </p>
                <StarRating/>
                <p>
                Trabalho em equipe:Promove a cooperação e o comprometimento dentro de uma equipe para atingir metas e resultados.
                </p>
                <StarRating/>
                </div>
                
              </>
            )}
        </div>
        <div className='feedbacksCadastrados'>
          <h2>Feedbacks Cadastrados</h2>
          {feedbacks.length === 0 ? (
            <p>Nenhum feedback cadastrado.</p>
          ) : (
            <ul>
              {feedbacks.map((feedback, index) => (
                <li key={index}>
                  <h3>{feedback.nomeFuncionario}</h3>
                  <p>{feedback.descricao}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;