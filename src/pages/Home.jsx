import React,{useEffect,useState}from "react";
import MemeCard from "../components/card";
import { GetAllMemes } from "../api/meme";

const HomePage=()=>{

    const[data,setData]=useState([])

    useEffect(()=>{
        GetAllMemes().then((data)=>setData(data.data.memes))
    },[])
    return(
       <div className="row">
        {
            data.map((el)=>(
                <MemeCard img={el.url} title={el.name}/>
            ))
        }
       </div>
    )
}

export default HomePage;