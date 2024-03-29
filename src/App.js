import Keeper from "./Component/Keeper";
import FormElement from "./Component/FormElement";
import FormShow from "./Component/FormShow";
import { useState } from "react";
import Total from "./Component/Total";



const App = () =>{

  const [formData,setFormData] = useState([]);

  // const [search, setSearch] = useState("");
    const dataHandler = (item)=>
    {
      // console.log(da);
      setFormData((perItem)=>
      {
        return [item, ...perItem];
      }
      )
    }

    // console.log(formData);

      const deleteHandler = (id)=>
  {
    // console.log(id);
    setFormData((perItem)=>
    {
      return perItem.filter(item => item.key !== id)
    }
    )
  }


  const searchChangeHandler = (it) =>{
    // console.log(it)
    setFormData((perItem)=>
    {
      return perItem.filter(item => item.title === it)
    }
    )

  }

  return(
<div>
  {/* <Keeper/> */}
  <Keeper searchItem={searchChangeHandler}/>
  
  <FormElement getData={dataHandler}/>

  {formData.map((item)=>(
      <FormShow
      key={item.key}
      id={item.key}
      title={item.title}
      password={item.password}
      onDelete={deleteHandler}
      />
    ))}

<Total formData={formData}/>

  
</div>
  );
}
export default App;