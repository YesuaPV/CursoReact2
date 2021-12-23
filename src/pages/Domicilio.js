import React from 'react';

const Domicilio = ({
    form,
    onChange,
    statescp
}) =>(
    <div className="principal align-items-center">
        <div className="buscador-cp container pt-4 ">
            <p className="text-end pe-5 fw-bold h1 ">Buscador por C&oacute;digo Postal</p>
            <div className="form-group mt-4 m-5 pb-5">
                <label className="h3 fw-bold ps-2">Código postal:</label>
                <input className="form-control" type="text" onChange={onChange} value={form.cp} placeholder="Ingrese el código postal" />
            </div>
        </div>
        <div className="container container_colonias mt-5 p-4 ">
            <div className="row justify-content-between">
                <div className =" h4 col-md-6">
                    <p>Estado: {form.estado}</p>
                    <p>Municipio: {form.municipio}</p>
                </div>
                <div className ="h4 col-md-4">
                    <p>C&oacute;digo Postal: {form.cp}</p>
                </div>
            </div>
            <div>
                <table className="table table-striped table-hover table-bordered border-dark">
                    <caption>Lista de colonias</caption>
                    <thead className="table-dark ">
                    <tr>
                        <th colSpan="4" className="text-center h4">Colonias</th>
                        </tr>
                    </thead>
                    <thead className="table-dark ">
                    <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col">Asentamiento</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Zona</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                statescp.map(
                    (item, i) => (
                            <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{item.asentamiento}</td>
                            <td>{item.tipo}</td>
                            <td>{item.zona}</td>
                            </tr>
                    )
                    )    
                }
                </tbody>
                </table>
            </div>
        </div>
        <div className="pt-2">            
        </div>
    </div>
    
);

export default Domicilio;