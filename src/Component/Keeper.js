import { useState } from "react";
const Keeper = (props) =>
{
 const [search,setSearch] = useState("");
 const searchChangeHandler = (event)=>
 {
    setSearch(event.target.value)
 }

const submitHna = (event) =>
{
    // event.preventDefault();
    props.searchItem(search);
    // console.log("hkkdjkkkkk");

}
    return(
        <div>
        <h1>Password Keeper</h1>
        <div>
       
        <label>Search:
            <input 
            type="text"
            value = {search}
            onChange={searchChangeHandler}
            />
             </label>

             <button type='button' onClick={submitHna}>submit</button>
            
</div>
</div>
    );
}
 export default Keeper;

