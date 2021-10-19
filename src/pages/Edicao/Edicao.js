import React, { useEffect, useState } from "react";
import Api from "../../api/api";

const Edicao = (props) => {
    const _id = props.match.params.id;
    const history = props.history;
    
    const [tarefa, setTarefa] = useState({});

    useEffect(() => {
        getTarefaById();
    }, []);

    const getTarefaById = async () => {
        
        const response = await Api.fetchGetById(_id);
        const result = await response.json();
        
        setTarefa(result);
    };

    const handleFieldsChange = (event) => {
        
        const campos = { ...tarefa };
        
        campos[event.target.name] = event.target.value;

        setTarefa(campos);
    };

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        
        const tarefaObj = { ...tarefa };
        try {
        const response = await Api.fetchPut(tarefaObj, _id);
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
                <h3>Edição da Tarefa</h3>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input type="text" value={tarefa.titulo} className="form-control" name="titulo" id="floatingInput" placeholder="Digite o Titulo" onChange={handleFieldsChange} />
                    <label htmlFor="floatingInput">Título</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input type="text" value={tarefa.descricao}
                      className="form-control" name="descricao" id="floatingsalario" placeholder="Digite o Salario" onChange={handleFieldsChange}/>
                    <label htmlFor="floatingInput">Descrição</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                  <select className="form-control" name="prioridade" id="floatingprioridade" value={tarefa.prioridade} onChange={handleFieldsChange}>
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                    </select>
                    <label htmlFor="floatingInput">Prioridade</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <select className="form-control" name="status" id="floatingStatus" value={tarefa.status} onChange={handleFieldsChange}>
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
                  <button className="btn btn-outline-success" type="submit">
                    Enviar
                  </button>
                  <button className="btn btn-outline-primary">Voltar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default Edicao;
