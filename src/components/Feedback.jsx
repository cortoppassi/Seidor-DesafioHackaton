import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import { FeedbackContext } from '../FeedbackContext';
import InputMask from 'react-input-mask';

import './feedback.css';

export default function Main() {
  const { feedbacks, addFeedback } = useContext(FeedbackContext);
  
  const [tipoFeedback, setTipoFeedback] = useState('');
  const [tecnicasVisivel, setTecnicasVisivel] = useState(false);
  const [comportamentaisVisivel, setComportamentaisVisivel] = useState(false);

  const [solucaoProblemas, setSolucaoProblemas] = useState(0);
  const [atencaoDetalhes, setAtencaoDetalhes] = useState(0);
  const [analiseRaciocinio, setAnaliseRaciocinio] = useState(0);
  const [responsabilidadeConfiabilidade, setResponsabilidadeConfiabilidade] = useState(0);
  const [adaptabilidadeFlexibilidade, setAdaptabilidadeFlexibilidade] = useState(0);
  const [trabalhoEquipe, setTrabalhoEquipe] = useState(0);

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
      solucaoProblemas,
      atencaoDetalhes,
      analiseRaciocinio,
      responsabilidadeConfiabilidade,
      adaptabilidadeFlexibilidade,
      trabalhoEquipe,
    };

    addFeedback(newFeedback);


    event.target.reset();
    setTipoFeedback('');
    setTecnicasVisivel(false);
    setComportamentaisVisivel(false);
    setSolucaoProblemas(0);
    setAtencaoDetalhes(0);
    setAnaliseRaciocinio(0);
    setResponsabilidadeConfiabilidade(0);
    setAdaptabilidadeFlexibilidade(0);
    setTrabalhoEquipe(0);
  };

  const handleTipoFeedbackChange = (event) => {
    const selectedTipoFeedback = event.target.value;
    setTipoFeedback(selectedTipoFeedback);
    setTecnicasVisivel(selectedTipoFeedback === 'habilidades');
    setComportamentaisVisivel(selectedTipoFeedback === 'trabalho');
  };

  return (
    <div className="feedback">
      <div className='container'>
        <div className='logo'>
        <Link to="/">
          <img src="https://nerdin.com.br/img/empresa/2422.png"/>
        </Link>
        </div>
        <div className="btn-cabecalho">
          <Link to="/lista" className="submit-button" > Meus Feedbacks </Link>
        </div>
      </div>
      <div className="formularioFeedback">

        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <label>Nome do Funcionário:</label>
            <input type="text" name="nomeFuncionario" required />
            <label>Departamento:</label>
            <input type="text" name="departamento" required />
            <label>Data do Feedback:</label>
            <InputMask mask="99/99/9999" name="dataFeedback" required />
            <label>Tipo de Feedback:</label>
            <select name="tipoFeedback" value={tipoFeedback} onChange={handleTipoFeedbackChange} required>
              <option value="">Selecione...</option>
              <option value="habilidades">Competências Técnicas</option>
              <option value="trabalho">Competências Comportamentais</option>
            </select>
            <label>Descrição (Opcional):</label>
            <textarea name="descricao" 
              placeholder="Digite aqui seu feedback... Utilize suas palavras de forma cuidadosa e respeitosa, oferecendo sugestões valiosas para o aperfeiçoamento mútuo." rows="4" cols="20">
            </textarea>

            <button to="/lista" type="submit" className="submit-button" id='btn-feedback'
              onClick={console.log(feedbacks)}>Enviar Feedback
            </button>
            
          </form>

        </div>
        <div className="questionario">
        {tecnicasVisivel && (
          <>
            <h2>Competências Técnicas</h2>
            <h3>Por favor, avalie o cumprimento destes requisitos em uma escala de 1 a 5, onde 1 representa um cumprimento insatisfatório e 5 representa um cumprimento excepcional.</h3>
            <div>
              <h4>
                Solução de problemas: Examina dados para compreender questões, tirar conclusões e resolver problemas.
              </h4>
              <StarRating rating={solucaoProblemas} onRatingChange={setSolucaoProblemas} />
              <h4>
                Atenção aos detalhes: Atende com diligência os detalhes e busca a qualidade na execução das tarefas.
              </h4>
              <StarRating rating={atencaoDetalhes} onRatingChange={setAtencaoDetalhes} />
              <h4>
              Análise/Raciocínio: Examina dados para compreender questões, tirar conclusões e resolver problemas.
              </h4>
              <StarRating rating={analiseRaciocinio} onRatingChange={setAnaliseRaciocinio} />
            </div>
          </>
        )}
        {comportamentaisVisivel && (
          <>
            <h2>Competências Comportamentais</h2>
            <h3>Por favor, avalie o cumprimento destes requisitos em uma escala de 1 a 5, onde 1 representa um cumprimento insatisfatório e 5 representa um cumprimento excepcional.</h3>
            <div>
              <h4>
                Responsabilidade e confiabilidade: Assume responsabilidade pessoal pela qualidade e pontualidade do trabalho e alcança resultados com pouca supervisão.
              </h4>
                <StarRating rating={responsabilidadeConfiabilidade} onRatingChange={setResponsabilidadeConfiabilidade} />
              <h4>
                Adaptabilidade e Flexibilidade: Se adapta às necessidades, condições e responsabilidades do trabalho em constante mudança.
              </h4>
                <StarRating rating={adaptabilidadeFlexibilidade} onRatingChange={setAdaptabilidadeFlexibilidade} />
              <h4>
                Trabalho em equipe: Promove a cooperação e o comprometimento dentro de uma equipe para atingir metas e resultados.
              </h4>
              <StarRating rating={trabalhoEquipe} onRatingChange={setTrabalhoEquipe} />
            </div>
          </>
        )}
        </div>
    
      </div>
    </div>
  );
}
