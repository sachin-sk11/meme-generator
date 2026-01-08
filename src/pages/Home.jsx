// import React,{useEffect,useState}from "react";
// import MemeCard from "../components/card";
// import { GetAllMemes } from "../api/meme";

// const HomePage=()=>{

//     const[data,setData]=useState([])

//     useEffect(()=>{
//         GetAllMemes().then((data)=>setData(data.data.memes))
//     },[])
//     return(
//        <div className="row">
//         {
//             data.map((el)=>(
//                 <MemeCard img={el.url} title={el.name}/>
//             ))
//         }
//        </div>
//     )
// }

// export default HomePage;

import React, { useEffect, useState } from "react";
import MemeCard from "../components/card";
import { GetAllMemes } from "../api/meme";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const memesPerPage = 12;

  useEffect(() => {
    GetAllMemes().then((res) => setData(res.data.memes));
  }, []);

  // pagination math
  const startIndex = (currentPage - 1) * memesPerPage;
  const endIndex = startIndex + memesPerPage;
  const currentMemes = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / memesPerPage);

  return (
    <>
      <div className="row">
        {currentMemes.map((el, index) => (
          <MemeCard key={index} img={el.url} title={el.name} />
        ))}
      </div>

      {/* Pagination buttons */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default HomePage;
