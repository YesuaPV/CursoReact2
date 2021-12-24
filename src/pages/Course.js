import React from 'react';

const Course = ({onSubmitEliminar, msgE, onSubmitCrear, msgC, formCrear, formEliminar, courses, onChangeCrear, onChangeEliminar}) => (
    <div className='fondo'>
        <div className='containerCurso p-5'>
            <div className='row'>
                <div className='col-lg-5 m-4 cont_cursos justify-content-around'>
                    <h1 className='text-center pt-3 pb-4'>Cursos Disponibles</h1>
                    {
                        courses.map(
                            (item, i) => (
                                <div key={i} className="pt-1 descCurso ps-2 pe-2">
                                    <div className='row'>
                                        <div className='col-lg-8'>
                                            <h2>{item.nombre}<h6>({item.clave})</h6></h2>
                                        </div>
                                        <div className='col-lg-4 text-end'>
                                            <h5>Disponible: {item.disponible}</h5>                                        
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h4>{item.descripcion}</h4> 
                                    </div>
                                    <div className='text-end pb-3'>
                                        <h6>{item.created}</h6> 
                                    </div>
                                </div>
                                
                            )
                        )
                    }
                </div>
                <div className='col-lg-5 m-4'>
                    <div className='cont_cursos pb-2'>
                        <form onSubmit={onSubmitCrear} className="p-3">
                            <div className="text-center mb-1 mt-0 pb-2">
                                <h1>Agregar curso</h1>
                            </div>
                            <div className="form-floating mb-2">
                                <input onChange={onChangeCrear} value={formCrear.nombre} autoComplete="off" required  type="text" className="form-control" name="nombre" id="nombre" />
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                            </div>
                            <div className='row'>
                                <div className="col form-floating mb-2">
                                    <input onChange={onChangeCrear} value={formCrear.clave} autoComplete="off" required type="text" className="form-control" name="clave" id="clave" />
                                    <label htmlFor="clave" className="form-label ms-2">Clave</label>
                                </div>
                                <div className="col form-floating mb-2">
                                    <input onChange={onChangeCrear} value={formCrear.disp} autoComplete="off" required type="text" className="form-control" name="disp" id="disp" />
                                    <label htmlFor="disp" className="form-label ms-2">Disponibilidad</label>
                                </div>
                            </div>                            
                            <div className="form-floating mb-2">
                                <input onChange={onChangeCrear} value={formCrear.desc} autoComplete="off" required type="text" className="form-control" name="desc" id="desc" />
                                <label htmlFor="desc" className="form-label">Descripción</label>
                            </div>    
                            <div className="text-end mt-3">
                                <p>{msgC}</p>
                            </div>                       
                            <div className="text-end mt-3">
                                <button type="submit" className="btn btn-success">Crear</button>
                            </div>
                        </form>
                    </div>
                    <div className='cont_cursos pb-2 mt-2'>
                        <form onSubmit={onSubmitEliminar} className="p-3">
                            <div className="text-center mb-1 mt-0 pb-2">
                                <h1>Eliminar curso</h1>
                            </div>
                            <div className='row'>
                                <div className="col form-floating mb-2">
                                    <input onChange={onChangeEliminar} value={formEliminar.clave} autoComplete="off" required type="text" className="form-control" name="clave" id="clave" />
                                    <label htmlFor="clave" className="form-label ms-2">Clave</label>
                                </div>
                                <div className="col text-end mt-3">
                                    <p>{msgE}</p>
                                </div>
                                <div className="col text-end mt-3">
                                    <button type="submit" className="btn btn-success">Eliminar</button>
                                </div>
                            </div>                            
                        </form>
                    </div>
                </div> 

            </div>
        </div>
    </div>
    
);

export default Course;