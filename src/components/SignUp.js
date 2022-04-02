import React, { useEffect, useState } from 'react';
import "../assets/signUp.css";
import checkValues from './checkValues';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createToast from './toastCreator';
import { Link } from 'react-router-dom';

function SignUp() {
    const [input , setInput] = useState({
        name : "" ,
        email : "" ,
        password : "" ,
        confirmPassword : "" ,
        agree : false ,
    });

    const [errors , setErrors] = useState({}) ;

    const [focused , setFocused] = useState({
        name : false ,
        email : false ,
        password : false ,
        confirmPassword : false ,
        agree : false ,
    }) ;

    useEffect(()=>{
        const checkErrors = checkValues(input);
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
        setErrors(checkValues(input))
        const errorLength = Object.keys(errors).length ;
        if(errorLength > 0){
            setFocused({
                name : true ,
                email : true ,
                password : true ,
                confirmPassword : true ,
                agree : true ,
            })
            createToast("please fix the errors" , "error")
        }else{
            createToast("Signed up successfully !" , "success")
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
      <section className="form-container">
        <h1 className="form-title">
            Sign Up
        </h1>
        <form onSubmit={submitForm}>
            <div className={`input-box ${errors.name && focused.name  ? "error" : "success"}`}>
                <label htmlFor="name-input">
                    name
                </label>

                <input 
                    value={input.name} 
                    onChange={changeValues} 
                    id="name-input" 
                    name="name" 
                    onFocus={focusHandler} />
                {
                (errors.name && focused.name) && <span className="error-box">
                    {errors.name}
                </span>
                }
            </div>
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
            <div className={`input-box ${errors.confirmPassword && focused.confirmPassword  ? "error" : "success"}`}>
                <label htmlFor="conf-pass-input">
                    confirm password
                </label>
                <input 
                    value={input.confirmPassword} 
                    onChange={changeValues} id="conf-pass-input" 
                    name="confirmPassword" 
                    onFocus={focusHandler} />
                {
                (errors.confirmPassword && focused.confirmPassword) && <span className="error-box">{errors.confirmPassword}</span>
                }
            </div>
            <div className={`input-box ${!errors.agree && "success"} agree`}>
                <div>
                    <label htmlFor="agree-input">
                        Accept the terms of privacy and policy
                    </label>
                    <input 
                        checked={input.agree} type="checkbox" id="agree-input" name="agree" onChange={changeValues} onFocus={focusHandler}/>
                </div>
                {
                (errors.agree && focused.agree) && <span className="error-box">{errors.agree}</span>
                }
            </div>
            <div className="button-container">
                <button className="submit-btn bg-none">
                <Link to="/login">
                    Login
                </Link>
                </button>
                <button type="submit" className="submit-btn">
                        Sign in
                </button>
                
            </div>
        </form>
        <ToastContainer/>
    </section>
  )
}

export default SignUp