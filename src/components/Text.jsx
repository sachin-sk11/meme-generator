import React,{useRef,useState} from "react";
import Draggable from "react-draggable";

const Text=()=>{
    const ref=useRef(null);

    const[editMode, setEditMode]=useState(false);
    const[val,setVal]=useState("Double click to edit");

    return(
       <Draggable nodeRef={ref}>
         <div ref={ref} style={{ position: "absolute", cursor: "move" }}>
            {
                editMode? <input 
                onDoubleClick={(e)=>setEditMode(false)}
                value={val} onChange={(e)=>setVal(e.target.value)}/> 
                :
                <h1  onDoubleClick={(e)=>setEditMode(true)}
                >{val}</h1>
            }
         </div>
       </Draggable>
    )
}

export default Text;