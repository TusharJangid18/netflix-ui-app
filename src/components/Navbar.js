import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
  return (
    <div style={{display:"flex",gap:"20px",padding:"10px",background:"black",color:"white"}}>
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}
