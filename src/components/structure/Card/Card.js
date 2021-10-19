import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const tarefa = props.data;
  return (
    <Link to={`/view/${tarefa._id}`} className="col">
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">{tarefa.titulo}</h5>
          <span className="badge bg-primary">{tarefa.prioridade}</span>
          <span className="badge bg-secondary">{tarefa.status}</span>
          <span className="badge bg-light text-dark">{tarefa.prazo}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
