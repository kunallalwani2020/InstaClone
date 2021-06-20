import React, { useContext, useState } from 'react'
import{ContextProvider} from "../Global/Context";
function Model() {
    const {model , closeModel, register,login,user,loader} = useContext(ContextProvider);
    const [state ,setstate]= useState({
        register: true,
        login: false,
    });
    const [inputs,setInputs]= useState({
        username: " ",
        email:" ", 
        password:" ",
    
    })
    const handleInput = (e)=>{
setInputs({...inputs,[e.target.name]: e.target.value});
    }
const formstoggle=()=>{
    setstate({
        ...state,
        register: !state.register,
        login: !state.login,
    })
}
const closeForum= e =>{ 
  const className = e.target.getAttribute("calss");
if (className==="model"){
    closeModel();
}
};
const registerUser=(e)=>{
    e.preventDefault();

    register(inputs)
    setInputs({username:' ',email:' ',password:' '})
}
const userLogin=(e)=>{
    e.preventDefault();
   
    login(inputs)
}

    return (
        <>
        {model ?
        <div className="model" onClick={closeForum}>
            <div className="model__container">
                {state.register?   <div className="model__form">
                 <form onSubmit={registerUser}>
                     <div className="model__group">
                        <img src="/images/logo.png"/>
                     </div>

                     <div className="model__group">
                         <input type="text" name="username" className="model__input" placeholder="Username..."onChange={handleInput}  value={inputs.username} required></input>
                     </div>
                     <div className="model__group">
                         <input type="email" name="email" className="model__input" placeholder="Email..."onChange={handleInput}  value={inputs.email} required></input>
                     </div>
                     <div className="model__group">
                         <input type="password" name="password" className="model__input" placeholder="Password"onChange={handleInput} value={inputs.password} required></input>
                     </div>
                     <div className="model__group">
                         <input type="submit" value="Register" className="btn btn-smart"/>
                     </div>
                     <div className="model__group">
                         <span onClick={formstoggle}>Already have an Account ?</span>
                     </div>
                 </form>
                 
                </div> :   <div className="model__form">
                 <form onSubmit={userLogin}>
                     <div className="model__group">
                        <img src="/images/logo.png"/>
                     </div>

                    
                     <div className="model__group">
                         <input type="email" name="email" className="model__input" placeholder="Email..." onChange={handleInput} value={inputs.email} required></input>
                     </div>
                     <div className="model__group">
                         <input type="password" name="password" className="model__input" placeholder="Password" onChange={handleInput} value={inputs.password} required></input>
                     </div>
                     <div className="model__group">
                         <input type="submit" value="Login" className="btn btn-smart"/>
                     </div>
                     <div className="model__group">
                         <span onClick={formstoggle}>Create a new account </span>
                     </div>
                 </form>
                 
                </div>}
              
            </div>

        </div>:""}
    </>
    )
}

export default Model
