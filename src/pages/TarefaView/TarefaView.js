import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/api";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const TarefaView = (props) => {
  const _id = props.match.params.id;
  const [tarefa, setTarefa] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    getTarefaById();
  }, []);

  const getTarefaById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    setTarefa(result);
  };

  const handleDelete = async (evento) => {
    evento.preventDefault();
    const response = await Api.fetchDelete(_id);
    const result = await response.json();
    alert(result.message);
    props.history.push("/");
  };

  return (
    <div className="container flex-grow-1">
      <div className="row">
        <div className="col">
          <h3 className="text-center mt-4">{tarefa.titulo}</h3>
          <h5 className="text-center">Prazo:{tarefa.prazo}  Status:"{tarefa.status}"</h5>
          <p className="text-center">{tarefa.descricao}</p>
          <h5 className="text-center">{tarefa.prioridade}</h5>
          <div className="d-grid gap-2 d-md-block">
            <Link to={`/edit/${tarefa._id}`} className="btn btn-outline-secondary">
              Editar
            </Link>
            <button className="btn btn-outline-danger" onClick={onOpenModal}>
              Excluir
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Tem certeza que deseja excluir essa tarefa?</h2>
        <button className="btn btn-danger" onClick={onCloseModal}>
          Não
        </button>
        <button className="btn btn-success" onClick={handleDelete}>
          Sim
        </button>
      </Modal>
    </div>
  );
};

export default TarefaView;
