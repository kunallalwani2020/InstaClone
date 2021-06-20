import React, { useState , useContext} from 'react'
import{FaCamera} from'react-icons/fa';
import{ContextProvider} from "../Global/Context";
function Create() {
const {create ,loader, user} = useContext(ContextProvider)
    const[title,settitle]=useState('');
    const[image,setimage]=useState('');

    const handleImage=(e)=>{
// console.log(e.target.files[0])
       setimage(e.target.files[0]);
    }
    const createPost=e=>{
        e.preventDefault();
        create({title,image})
        setimage('')
        settitle('')
    }
    return (
     <>
     {!loader && user?    <div className="create">
            <form onSubmit={createPost}>
            <div className="create__input">
                <input type="text" className="create__inputt" placeholder="what are in your mind..... "
                 required onChange={(e)=>settitle(e.target.value)} value={title}/>
            </div>
            <div className="create__second">
                <div className="create__second-a">
                    <label htmlFor="file">
                      <FaCamera className="camera"/>
                    </label>
                    <input type="file" id="file" onChange={handleImage} className="file" required  />
                </div>
                <div className="create__second-b">
                    <input type="submit"value="Create" className="btn-sweet" />
                </div>
            </div>
            </form>
        </div>:""}
     </>
    )
}

export default Create
