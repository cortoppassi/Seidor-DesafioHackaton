import React from "react";
import ListaFeedback from "./ListaFeedback";
import { Link } from 'react-router-dom';
import feedbacks from "./Main";
import './lista.css';

export default function Lista() {
  return (
    <div className="feedback">
      <Link to="/feedback" className="submit-button">Novo Feedback</Link>
      <div className="filtro">
        <input type="text" name="filtro" className="input-field" />
        <button type="submit" className="submit-button">Filtrar</button>
      </div>

      <div className="listaFeedback">
        <div>
          <h2>Feedbacks Cadastrados</h2>
          {/* <ListaFeedback feedbacks={feedbacks} /> */}
        </div>
      </div>
    </div>
  );
}

