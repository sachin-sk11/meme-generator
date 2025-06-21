import React,{useState,createRef} from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../components/Text";
import { toJpeg } from "html-to-image";
import download from "downloadjs";


const Edit=()=>{
    const [params]=useSearchParams();

    const[count, setCount]=useState(0);

    const memref=createRef();

    const addText=()=>{
        setCount(count+1)
    }

    const handleExport=()=>{
        if(memref.current){
            toJpeg(memref.current ,{quality:0.95})
            .then((dataurl)=>{download(dataurl,'meme.jpeg')})
            .catch((err)=>console.error(err))
        }
    }

    return(
        <div>
            <h1>Edit page</h1>
            <div  style={{width:"1000px",position:"relative", border:"1px solid black", backgroundColor: "white" ,padding:"0"}}ref={memref} className="meme mt-3 mb-2">
                 
                 <img src={params.get("url")} style={{ display: "block" }}  width={"400px"} alt="meme"/>
                 {
                    Array(count).fill(0).map((e)=>(<Text/>))
                 }
            </div>
            <Button onClick={addText} style={{marginTop:"50px"}}>Add Text</Button>
            <Button  variant="success" style={{marginTop:"50px"}}  onClick={(e)=>handleExport()}>Save </Button>
        </div>
        
    )
}

export default Edit;

