import React from "react";
import Api from "../../api/api";

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    const tarefa = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo,
    };

    try {
      const response = await Api.fetchPost(tarefa);
      const result = await response.json();
      alert(result.message);
      history.push("/"); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Tarefas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text"className="form-control" name="titulo" id="floatingInput" placeholder="Digite o Titulo"/>
                  <label htmlFor="floatingInput">Titulo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text"className="form-control"name="descricao" id="floatingInput" placeholder="Digite a Descricao"/>
                  <label htmlFor="floatinginput">Descrição</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                <select className="form-control" name="prioridade" id="floatingprioridade" >
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                    </select>                    
                  <label htmlFor="floatingInput">Prioridade</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select className="form-control" name="status"id="floatingstatus" placeholder="Digite o status">
                    <option value="fazer">Fazer</option>
                    <option value="fazendo">Fazendo</option>
                    <option value="feito">Feito</option>
                  </select>
                  <label htmlFor="floatingStatus">Status</label>
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <input type="text"className="form-control"name="prazo" id="floatingInput" placeholder="Digite o prazo"/>
                        <label htmlFor="floatinginput">Prazo</label>
                    </div>
              </div>
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
