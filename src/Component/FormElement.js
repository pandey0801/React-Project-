import { useState } from "react";
const FormElement =(props)=>
{
 const [title,setTitle] = useState("");
 const [password,setPassword] = useState("");

const titleChangeHandler = (event) =>{
    setTitle(event.target.value);
}

const passwordChangeHandler = (event) =>{
    setPassword(event.target.value)
}

const submitHandler = (event) =>
{
    event.preventDefault();
    const data = {
        title:title,
        password:password,
        key:Math.random()
    }
   
    props.getData(data)
   
    setPassword("");
    setTitle("");

}


     return(
        <form onSubmit={submitHandler}>
        <div>
            <div>
            <label>Title
            <input 
            type="text" 
            value = {title}
            onChange={titleChangeHandler}
            />
            </label>
            </div>

            <div>
            <label>Password
            <input 
            type="text" 
            value = {password}
            onChange={passwordChangeHandler}
            />
            </label>

            <div>
            <button type="submit" >Add</button>
            </div>
            </div>
        </div>
        </form>
    );
}
export default FormElement;