import React from "react";
export default function MovieModal({movie,onClose,onSave}){
  if(!movie) return null;
  return (
    <div style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.8)"}} onClick={onClose}>
      <div style={{background:"white",margin:"5% auto",padding:"20px",width:"60%"}} onClick={(e)=>e.stopPropagation()}>
        <h2>{movie.name}</h2>
        <p dangerouslySetInnerHTML={{__html:movie.summary}}></p>
        <button onClick={()=>onSave(movie)}>+ Watchlist</button>
      </div>
    </div>
  );
}
