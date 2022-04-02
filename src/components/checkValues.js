const checkValues = (data , type="signIn") => {    
    const errors = {

    }

    if(type === "signIn"){
        const {name , email , password , confirmPassword , agree} = data ;

        if(name && name.trim().length < 6){
            errors.name = "name must be up to 6 characters";
        }else if(!name){
            errors.name = "name is required"
        }
        
        if(!email){
            errors.email = "email is required"
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = "enter a valid email"
        }
    
        if(!password){
            errors.password = "password is required"
        }else if(password.length < 6){
            errors.password = "password must be up to 6 characters"
        }
    
        if(confirmPassword !== password){
            errors.confirmPassword = "passwords not match"
        }
    
        if(!agree){
            errors.agree = "terms must be accepted"
        }
    }else if(type === "logIn"){
        const {email , password} = data ;

        if(!email){
            errors.email = "email is required"
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = "enter a valid email"
        }

        if(!password){
            errors.password = "password is required"
        }else if(password.length < 6){
            errors.password = "password must be up to 6 characters"
        }

    }

    return errors
}

export default checkValues