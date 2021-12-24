import React from 'react';
import Imagen from '../images/imagen.png';

const Formulario = ({form, onChange, onSubmit}) => (
    <div className="principal">
        <div className="container-form">            
            <form onSubmit={onSubmit} className="form-react">
                <div className="text-center mb-1">
                    <h1>Curso React</h1>
                </div>
                <div className="text-center mb-4">
                    <img src={Imagen} alt="Imagen Prueba" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input autoComplete="off" required onChange={onChange} value={form.email} type="email" className="form-control" name="email" id="email" placeholder="Ingrese su correo" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="pass" className="form-label">Clave</label>
                    <input required onChange={onChange} value={form.pass} type="password" className="form-control" name="pass" id="pass" placeholder="Clave" />
                </div>
                <div className="text-end mt-3">
                    <button type="submit" className="btn btn-success">Enviar</button>
                </div>
            </form>
        </div>
    </div>
);

export default Formulario;