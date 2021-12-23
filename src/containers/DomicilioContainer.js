import React, { useState } from 'react';
import Domicilio from '../pages/Domicilio';
import states from '../data/states.json';

const DomicilioContainer = () =>{
    const [ form, setForm ] = useState({cp:'', estado:'', municipio:''});

    const onChange = ({target}) =>{
        let cp = target.value;
        if(cp.length>0)
            if(cp[cp.length-1]>'9' || cp[cp.length-1]<'0' )
                cp = cp.substring(0,cp.length-1);
        if( cp.length > 5 )
            return;
        setForm( { ...form, cp: cp} ); // key : value       
        if( cp.length === 5 ){
            setStatescp(states.filter(item => item.cp === parseInt(cp,10)));                          
            states.forEach(state => {
                if( state.cp === parseInt( cp, 10 ) ){
                    setForm({...form,estado: state.estado, municipio: state.municipio, cp: cp, asentamiento:state.asentamiento, tipo:state.tipo, zona:state.zona});
                }
            });  
        }
        else{
            setStatescp([]);
            setForm( {estado:'', municipio:'', asentamiento:'', tipo:'', zona:'', cp: cp} ); // key : value  
        }
    }

    return(
        <Domicilio
            onChange = { onChange }
            form = { form }
            statescp = { statescp }
        />
    )
};

export default DomicilioContainer;