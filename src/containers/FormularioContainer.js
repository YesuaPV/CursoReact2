import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Formulario from '../pages/Formulario';

const FormularioContainer = () =>{
    const history = useHistory();
    const [form, setForm] = useState({ email:'', pass:'' });

    const onChange = (e) => setForm({...form, [e.target.id] : e.target.value });

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log( form );
        history.push( "/welcome", {form: form } );
    }

    return(
        <Formulario form={form} onChange={onChange} onSubmit={onSubmit} />
    )
};

export default FormularioContainer;