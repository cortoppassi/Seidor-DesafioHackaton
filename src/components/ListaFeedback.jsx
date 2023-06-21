import React from 'react';
import './listaFeedback.css';


function ListaFeedback(props) {
  const feedbackItems =  feedbacks;
  if (feedbacks && feedbacks.length > 0) {
    for (let i = 0; i < feedbacks.length; i++) {
      const feedback = feedbacks[i];
      feedbackItems.push(
        <div key={i}>
          <h3>Nome do Funcionário: {feedback.nomeFuncionario}</h3>
          <p>Departamento: {feedback.departamento}</p>
          <p>Data do Feedback: {feedback.dataFeedback}</p>
          <p>Tipo de Feedback: {feedback.tipoFeedback}</p>
          <p>Descrição: {feedback.descricao}</p>
          <hr />
        </div>
      );
    }
  } else {
    feedbackItems.push(<p>Nenhum feedback cadastrado.</p>);
  }

  return <div className="feedbacksCadastrados">{feedbackItems}</div>;
}

export default ListaFeedback;
