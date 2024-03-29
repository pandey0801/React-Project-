const FormShow=(props)=>{

    const sumbitHandler = (event)=>{
        props.onDelete(props.id);

    }


return(
    <div>
    <li>
    {props.title} {props.password} 
    <button type="click" onClick={sumbitHandler}>delete</button>
    <button type="click">edit</button>
    </li>
    </div>
);
}
export default FormShow;