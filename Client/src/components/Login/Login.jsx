import React from "react";
import { Link } from 'react-router-dom';
import style from "../Login/login.css";
import { useState } from "react";


const regexEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}$/

export default function Login({login}){

    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({
        email:"",
        password:""
    });



    function validate(inputs){

    const errors = {}

    if(!inputs.email){ errors.email = 'Debe ingresar un Email.'}
    else if (!inputs.password){ errors.password = 'Debe ingresar un Password.'}

    else if(!regexEmail.test(inputs.email)){ errors.email = 'Debe ingresar un Email valido.'}
    else if (!regexPassword.test(inputs.password)){ errors.password = 'Debe ingresar un Password valido.'}
    
    return errors;
    }


function handleChange(ele){

    setInputs({
        ...inputs,
        [ele.target.name]: ele.target.value
    })
    setErrors(
        validate({
        ...inputs,
        [ele.target.name]: ele.target.value
    })
    );
}


 function handleSubmit(ele){
    ele.prevent.default()

   const aux = Object.keys(errors)
   if (aux.length === 0){
    setInputs({
        email:"",
        password:"",
    })

    setErrors({
        email:"",
        password:"",
    })
    login(inputs)
    return alert('OOOOKKKK')
   }
   return alert ('Error')
 }

    return(
        
            <div className="loginCont">

                <img className="imgLog" src="src\components\Login\Rick-and-Morty.png"></img>

                <form onSubmit={handleSubmit}> 
                {/* <form className="prueba"> */}

                <label className="labelCont">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 E m a i l : </label>
                
                <input  name="email"
                 className="inputLog"
                 value={inputs.email}
                 onChange={handleChange}
                 placeholder="&nbsp;       Ingrese  email:" 
                 ></input>
                 <br></br><br></br>
                  
                <p className='theErrors'>{errors.email}</p>
                
                
                <label className="labelCont">&nbsp; P a s s w o r d : </label>
                
                <input name="password"
                 className="inputLog"
                 value={inputs.password}
                 onChange={handleChange}
                 placeholder="&nbsp;    Ingrese  password:"

                 ></input><br></br><br></br>
                 
                 <p className='theErrors'>{errors.password}</p>
                 {
                    Object.keys(errors).length === 0 ?    
                
                <Link to= '/home'>

                <button type="submit"
                className="buttonIngresar"
                
                 >Ingresar</button>

                </Link>
                 : null}

                </form>
            </div>

    )
}