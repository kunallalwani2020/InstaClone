import React,{useContext, useReducer} from 'react'
import {FaSistrix ,FaHome , FaTelegramPlane,FaRegCompass,FaRegHeart} from"react-icons/fa";
import{ContextProvider}from"../Global/Context"
function Navbar() {
    const {model , openModel,user,loader, logout} = useContext(ContextProvider)
    console.log("my model", model)
   
   const openForms=()=>{
     openModel();
    }
    const userLogOut=()=>{
logout();
    }
    const checkUser=()=>{
        return !loader? !loader && user ? ( <li>{user.displayName}/<span onClick={userLogOut}>logout</span></li>
            ):(       <li onClick={openForms}>Register/Login</li>
             ) :'....' }
    return (
        <div className="Navbar">
           <div className="navbar__first">
               <div className ="navbar__first-logo">
               <img src="./images/logo"/>
</div>
           </div>
           <div className="navbar__middle">
               <div className="navbar__middle_search">
                   <input type="text" className="navbar__search" placeholder="Search"/>
                   <FaSistrix className="SearchIcons"/>
               </div>

           </div>
           <div className="navbar__last">
               <li><FaHome className="navbar__icons"/></li>
               <li><FaTelegramPlane class ="navbar__icons"/></li>
               <li><FaRegCompass class ="navbar__icons"/></li>
               <li><FaRegHeart class ="navbar__icons"/></li>
               {checkUser()}


           </div>

        </div>
    )
}

export default Navbar
