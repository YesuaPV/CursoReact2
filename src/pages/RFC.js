import React, { Fragment } from 'react';

const RFC = ({
    rfc,
    form,
    onChange
}) =>(
    <Fragment>
        <div className="principal">
        <div className="container-form">            
            <div className="form-react">
                <div className="text-center lbl-rfc mb-1">
                    <h1>RFC</h1>
                </div>
                <div className="container d-flex justify-content-center">
                <form className="form">
                    <div className="form-group mt-3">
                        <label>Apellido paterno:</label>
                        <input onChange={onChange} value={form.paterno} className="form-control" type="text" name="paterno" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Apellido materno:</label>
                        <input onChange={onChange} value={form.materno} className="form-control" type="text" name="materno" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Nombre:</label>
                        <input onChange={onChange} value={form.nombre} className="form-control" type="text" name="nombre" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Fecha de nacimiento:</label>
                        <input onChange={onChange} value={form.fechaNacimiento} className="form-control" type="date" name="fechaNacimiento" />
                    </div>
                </form>
                </div>
                <div className="text-center mt-5">
                    <h5 className="txt-rfc">{rfc}</h5>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
);

export default RFC;