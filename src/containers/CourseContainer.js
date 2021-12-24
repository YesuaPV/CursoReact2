import React, { useEffect, useState } from 'react';
import Request from '../async/request';
import Course from '../pages/Course';


const CourseContainer = () =>{
    const [courses,setCourses]=useState([]);
    const [formCrear, setFormCrear] = useState({ nombre:'', clave:'', disp:'', desc:'' });
    const [formEliminar, setFormEliminar] = useState({ clave:''});
    const [msgC, setMsgC]= useState("");
    const [msgE, setMsgE]= useState("");

    const onChangeCrear = (e) => setFormCrear({...formCrear, [e.target.id] : e.target.value });
    const onChangeEliminar = (e) => setFormEliminar({...formEliminar, [e.target.id] : e.target.value });

    useEffect(
        () =>{
            const get = async () =>{
                const request = new Request("GET",null,1,"control/curso");
                const response = await request.exec();
                setCourses( response.data );
            }
                get();
            
            
        }        
    );

    const onSubmitCrear = async (e) => {
        e.preventDefault();
        const body = {
            curso:{
            nombre:formCrear.nombre,
            clave:formCrear.clave,
            descripcion:formCrear.desc,
            disponible:formCrear.disp
            }
        }
        const request = new Request("POST",body,1,"control/curso");
        const response = await request.exec();
        console.log(body);
        console.log(response);
        if(response.isSuccess){
            setMsgC("Curso creado");
            setMsgE("");
            setFormCrear({ nombre:'', clave:'', disp:'', desc:'' });
        }
        else{
            setMsgC(response.message);
            setMsgE("");
        }        
    }
    const onSubmitEliminar = async (e) => {
        e.preventDefault();
        const body = {
            clave:formEliminar.clave
        }
        const request = new Request("DELETE",body,1,"control/curso");
        const response = await request.exec();
        console.log(body);
        console.log(response);
        if(response.isSuccess){
            setMsgE("Curso eliminado");
            setMsgC("");
            setFormEliminar({ clave:''});
        }
        else{
            setMsgE(response.message);
            setMsgC("");
        }        
    }

    return(
        <Course onSubmitEliminar={onSubmitEliminar} msgE={msgE} onSubmitCrear={onSubmitCrear} msgC={msgC} formCrear={formCrear} formEliminar={formEliminar} courses={courses} onChangeCrear={onChangeCrear}  onChangeEliminar={onChangeEliminar} />
    )
};

export default CourseContainer;