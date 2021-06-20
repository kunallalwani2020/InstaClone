import React, { useContext , useEffect, useState} from 'react'
import { ContextProvider } from "../Global/Context";
import {db} from'../config/config';
function Comment(props) {
    const{loader,user, publishComment}= useContext(ContextProvider)
    const[state ,setState]= useState('');
    const[comments,setComments]= useState([]);
    const postcomment = e =>{
        e.preventDefault();
    publishComment({id: props.id, comment: state});
    setState("");
    }
    React.useEffect(() => {
        db.collection("posts")
          .doc(props.id)
          .collection("comments")
          .orderBy("currentTime", "desc")
          .onSnapshot((snp) => {
            setComments(snp.docs.map((doc) => doc.data()));
          });
      }, []);



    return (
        <div className="comments">
        {comments.map((comment) => (
          <div className="comments__container" key={comment.id}>
            <div className="comments__container-name">{comment.username}</div>
            <div className="comments__container-msg">{comment.comment}</div>
          </div>
        ))}
                <div className="comments__section">
                   {!loader && user?  <form onSubmit={postcomment}>
                    <input type="text" className="comments__input" placeholder="Add a comment..." onChange={(e)=>setState(e.target.value)} value={state} required />
                    </form>:""}
                </div>
                
            </div>
            
     
    )
}

export default Comment
