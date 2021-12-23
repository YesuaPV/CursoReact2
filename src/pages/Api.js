import React from 'react';
import LogoGit from '../images/github1.png';

const Api = ({
    consumir, 
    perfiles,
    onChange,
    nombre,
    cantidad
}) =>(
    <div>
        <div className="buscador">
            <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={LogoGit} align="right" className="img-logo img-fluid p-4" alt="Logo Git" />  
                        </div>
                        <div className="col-md-8">
                            <div className="p-3 pt-4">
                                <p className="h1 fw-bold pb-2 pt-2">Buscador de GitHub</p>
                                <div className="row">
                                    <input className="form-control mt-4" type="text" onChange={onChange} value={nombre} placeholder="Ingresa un nombre de GitHub" />
                                </div>
                                <div className="justify-content-center mt-4 col-md-4">
                                    <button onClick={consumir} className="btn btn-light form">Buscar</button>
                                </div>        
                            </div>
                            <div className="text-end me-5 ">
                                <p className="h2 drop_name">{cantidad.mensaje}</p>
                            </div>                            
                        </div>
                    </div>
               
            </div>
        </div>        
        <div className="drop mb-3 ">
            {
                perfiles.map(
                    (item, i) => (
                        <div key={i} className="align-items-center">
                            <div className="drop_container mt-4 me-0 ms-0 mb-1">
                                <div className="drop_card">
                                    <div className="drop_data row">
                                        <div className="col-md-3 text-center">
                                            <img className="img-avatar" src={item.avatar_url} alt="Perfil" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="drop_name">{item.login}</h1>
                                        </div>
                                        <div className="col-md-4 text-center pt-2 pb-2">
                                            <a target="_blank" rel="noreferrer" href={item.html_url} className="cta">
                                            <span>Ver perfil</span>
                                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                )
                
            }
            <div className="text-center ">
                <p className="h1 fw-bold">{cantidad.cantidadR}</p>
            </div>
        </div>       
                                     
                        
    
        
    </div>
);

export default Api;