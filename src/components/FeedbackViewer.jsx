import React from 'react';
import './FeedbackViewer.css';

function FeedbackViewer({ feedbacks, onRemoveFeedback }) {
  const handleRemoveFeedback = (feedbackId) => {
    onRemoveFeedback(feedbackId);
  };

  return (
    <div className="feedback-viewer">
      <h2>Feedbacks Cadastrados</h2>
      {feedbacks.length === 0 ? (
        <p>Nenhum feedback cadastrado.</p>
      ) : (
        <ul>
          {feedbacks.map((feedback) => (
            <li key={feedback.id} className="feedback-item">
              <h3>{feedback.title}</h3>
              <p>{feedback.description}</p>
              <button onClick={() => handleRemoveFeedback(feedback.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackViewer;
