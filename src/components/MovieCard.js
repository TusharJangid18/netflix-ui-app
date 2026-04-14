import React from "react";
export default function MovieCard({movie,onClick}){
  return (
    <div style={{width:"150px",cursor:"pointer"}} onClick={()=>onClick(movie)}>
      <img src={movie.image?.medium} alt="" style={{width:"100%"}}/>
      <p>{movie.name}</p>
    </div>
  );
}
