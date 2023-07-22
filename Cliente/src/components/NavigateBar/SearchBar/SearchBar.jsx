import React, {useState} from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props){
    const [id, setId] = useState("");
    
    const handleChange= (event) =>{
     
        setId(event.target.value)
    };
    
    
    return(
        <div>
            <input className={style.input}
             type="text"
             placeholder=' Try to find a Champion'
              onChange={handleChange}
              value={id}/>
             <button className={style.btn} 
             onClick={()=> { 
             props.onSearch(id);
                }}>
                Agregar
             </button>
        </div>
    );
}