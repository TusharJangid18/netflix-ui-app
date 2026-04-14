import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
  const nav = useNavigate();
  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h1>Netflix UI</h1>
      <button onClick={()=>nav("/home")}>Continue as Guest</button>
    </div>
  );
}
