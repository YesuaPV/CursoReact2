import React, { useEffect, useState } from 'react';
import Api from '../pages/Api';
import Request from '../async/request';

const ApiContainer = () =>{
    const [ perfiles, setPerfiles ] = useState([]);
    const [ nombre, setNombre ] = useState("");
    const [ cantidad,setCantidad] = useState({mensaje:'',cantidadR:''});

    useEffect(
        () =>{
        },[]
    );    

    const onChange = ({ target }) =>{
        setNombre( target.value );
    }

    async function consumir(){
        console.log( "Consumiendo..." );
        let request = new Request("GET", null, false, `search/users?q=${nombre}+in:login`);
        let respose = await request.exec();
        console.log( respose );
        setPerfiles( respose.items );
        if(respose.total_count===0){
            setCantidad({...cantidad,mensaje:'',cantidadR:'Sin resultados'});
        }
        else{
            setCantidad({...cantidad,mensaje:respose.items.length+' Resultados disponibles',cantidadR:''});
        }
    }
    
    return(
        <Api 
            perfiles = { perfiles }
            consumir = { consumir }
            onChange = { onChange }
            nombre = { nombre }
            cantidad = { cantidad }
        />
    )
};

export default ApiContainer;