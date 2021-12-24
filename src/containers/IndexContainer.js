import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Request from '../async/request';
import Index from '../pages/Index';

const IndexContainer = () =>{
    const history = useHistory();
    const [form, setForm] = useState({ usuario:'', clave:'' });
    const [msg, setMsg]= useState("");

    const onChange = (e) => setForm({...form, [e.target.id] : e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        const body = {
            id: form.usuario,
            clave: form.clave
        }
        const request = new Request("POST",body,0,"service/autentica");
        const response = await request.exec();
        if(response.isSuccess){
            setMsg("");
            sessionStorage.setItem("auth",JSON.stringify(response.data));
            e.preventDefault();
            history.push("/curso");
        }
        else{
            setMsg(response.message);
        }
        
    }
    
    
    const link1 = (e) =>{e.preventDefault();history.push( "/");}
    const link2 = (e) =>{e.preventDefault();history.push( "/formulario");}
    const link3 = (e) =>{e.preventDefault();history.push( "/rfc");}
    const link4 = (e) =>{e.preventDefault();history.push( "/api");}
    const link5 = (e) =>{e.preventDefault();history.push( "/domicilio");}
    

    return(
        <Index msg={msg} form={form} onChange={onChange} onSubmit={onSubmit} link1={link1} link2={link2} link3={link3} link4={link4} link5={link5} />
    )
};

export default IndexContainer;