import React,{useState} from "react";

const Textfield=({name,label,type,setValue,isValid,validate})=>{
    
    const handleChange=(event)=>{
        setValue(event.target.value);
        validate(event.target.value,name);
        }


    return(
        <div>
            <div className='input-label'>{label}</div>
            <input onChange={handleChange} className={`input-field ${isValid ? "": "error"}`} type={type}/>
        </div>
    )
}
export default Textfield ;