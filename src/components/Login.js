import React, { useEffect, useState } from 'react';
import "../assets/signUp.css";
import checkValues from './checkValues';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createToast from './toastCreator';
import { Link } from 'react-router-dom';

function Login() {
    const [input , setInput] = useState({
        email : "" ,
        password : "" ,
    });

    const [errors , setErrors] = useState({}) ;

    const [focused , setFocused] = useState({
        email : false ,
        password : false ,
    }) ;

    useEffect(()=>{
        const checkErrors = checkValues(input , "logIn");
        setErrors(checkErrors);
    },[input]);

    const changeValues = (e) => {
        const inputName = e.target.name ;
        if(inputName === "agree"){
            setInput({
                ...input ,
                [inputName] : e.target.checked
            })
        }else{
            setInput({
                ...input ,
                [inputName] : e.target.value
            })
        }
    }

    const submitForm = (e)=>{
        e.preventDefault();
        const checkErrors = checkValues(input , "logIn")
        setErrors(checkErrors) ;
        const errorLength = Object.keys(errors).length ;
        if(errorLength > 0){
            setFocused({
                email : true ,
                password : true ,
            })
            createToast("check username or password" , "error")
        }else{
            createToast("Logged in successfully !" , "success")
        }
    }

    const focusHandler = (e) => {
        const name = e.target.name ;
        setFocused({
            ...focused ,
            [name] : true
        });
    }
  return (
    <section className="form-container login">
        <h1 className="form-title">
            Login
        </h1>
    <form onSubmit={submitForm}>
        <div className={`input-box ${errors.email && focused.email ? "error" : "success"}`}>

            <label htmlFor="email-input">
                email
            </label>
            <input 
                value={input.email} 
                onChange={changeValues} 
                id="email-input" 
                name="email" 
                onFocus={focusHandler} />
            {
            (errors.email && focused.email) && <span className="error-box">{errors.email}</span>
            }
        </div>
        <div className={`input-box ${errors.password && focused.password  ? "error" : "success"}`}>

            <label htmlFor="pass-input">
                password
            </label>
            <input 
                value={input.password} 
                onChange={changeValues} 
                id="pass-input" 
                name="password" 
                onFocus={focusHandler} />
            {
            (errors.password && focused.password) && <span className="error-box">{errors.password}</span>
            }
        </div>
        <div className="button-container">
            <button className="submit-btn bg-none">
                <Link to="/signup">
                    Sign up
                </Link>
            </button>
            <button type="submit" className="submit-btn">
                Login
            </button>
            
        </div>
    </form>
    <ToastContainer/>
</section>
  )
}

export default Login