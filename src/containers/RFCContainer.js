import React, { useState } from 'react';
import RFC from '../pages/RFC';

const RFCContainer = () =>{
    const prohibido = ["BUEI","BUEY","CACA","CACO","CAGA","CAGO","CAKA","CAKO","COGE","COJA","COJE","COJI","COJO","CULO","FETO","GUEY"
                    ,"JOTO","KACA","KACO","KAGA","KAGO","KOGE","KOJO","KAKA","KULO","MAME","MAMO","MEAR","MEAS","MEON","MION","MOCO"
                    ,"MULA","PEDA","PEDO","PENE","PUTA","PUTO","QULO","RATA","RUIN"];
    const [rfc, setRFC] = useState("**********-###");
    const [form, setForm] = useState({nombre: '', paterno:'',materno:'',fechaNacimiento:''});

    const onChange = (e) =>{
        let name = e.target.name;
        let value = String( e.target.value ).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        setForm({...form, [name] : value});
        if( name === "nombre" ){
            let sub1 = rfc.substring(0,3);
            let sub2 = rfc.substring(4, 14);
            if( value.length > 0 ){
                let nombre = value.substring(0, 1);
                setRFC( sub1 + nombre  + sub2 );
                let subpr =sub1+nombre;
                let subc =rfc.substring(4,14);
                if(subpr.charAt(3)==='X' && form.nombre.length>0){
                    let sub1 = subpr.substring(0,3);
                    subpr=sub1+form.nombre.charAt(0);
                }
                if(prohibido.find(element => element === subpr)!==undefined){
                    let sub1 = subpr.substring(0,3);
                    setRFC( sub1 + "X" + subc);
                }
            }
            else if( value.length < 2 ){
                setRFC(sub1 + "*" + sub2 );
            }
            
        }
        else if( name === "paterno" ){
            let sub = rfc.substring(2,14);
            if( value.length > 1 ){
                let paterno = value.substring(0, 2);
                setRFC( paterno + "" + sub );
                let subpr =paterno+sub.substring(0,2);
                let subc =rfc.substring(4,14);
                if(subpr.charAt(3)==='X' && form.nombre.length>0){
                    let sub1 = subpr.substring(0,3);
                    subpr=sub1+form.nombre.charAt(0);
                }
                if(prohibido.find(element => element === subpr)!==undefined){
                    let sub1 = subpr.substring(0,3);
                    setRFC( sub1 + "X" + subc);
                }
                else{
                    setRFC( subpr + subc);
                }
                
            }
            else if( value.length < 2 ){
                let subpr = "**"+sub.substring(0,2);
                let subc = rfc.substring(4,14);
                if(subpr.charAt(3)==='X' && form.nombre.length>0){
                    let sub1 = subpr.substring(0,3);
                    subpr=sub1+form.nombre.charAt(0);
                }
                setRFC(subpr + subc); 
            }
            
        }
        else if( name === "materno" ){
            let sub1 = rfc.substring(0,2);
            let sub2 = rfc.substring(3, 14);
            if( value.length >= 1  ){
                let materno = value.substring(0, 1);
                setRFC( sub1 + materno + sub2 );
                let subpr = sub1+materno+sub2.charAt(0);
                let subc =rfc.substring(4,14);
                if(subpr.charAt(3)==='X' && form.nombre.length>0){
                    let sub1 = subpr.substring(0,3);
                    subpr=sub1+form.nombre.charAt(0);
                }
                if(prohibido.find(element => element === subpr)!==undefined){
                    let sub1 = subpr.substring(0,3);
                    setRFC( sub1 + "X" + subc);
                }
                else{
                    setRFC( subpr + subc);
                }
                
            }
            else if( value.length < 1 ){
                let subpr = rfc.substring(0,2)+"*"+rfc.charAt(3);
                let subc = rfc.substring(4,14);
                if(subpr.charAt(3)==='X' && form.nombre.length>0){
                    let sub1 = subpr.substring(0,3);
                    subpr=sub1+form.nombre.charAt(0);
                }
                setRFC(subpr + subc);           
                
            }
            
        }
        else{
            let sub1 = rfc.substring(0,4);
            let sub2 = rfc.substring(10, 14);
            let arr = value.split("-");
            setRFC( sub1 + arr[0].substring(2,5) + arr[1] + arr[2] + sub2 );
            // aaaa - mm - dd
        }
    }

    return(
        <RFC 
            rfc={rfc} 
            form={form} 
            onChange={onChange} 
        />
    )
};

export default RFCContainer;