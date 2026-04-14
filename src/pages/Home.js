import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import {fetchMovies} from "../services/api";

export default function Home(){
  const [movies,setMovies]=useState([]);
  const [selected,setSelected]=useState(null);

  useEffect(()=>{load();},[]);

  async function load(){
    const data=await fetchMovies();
    setMovies(data);
  }

  function save(movie){
    const list=JSON.parse(localStorage.getItem("watchlist"))||[];
    localStorage.setItem("watchlist",JSON.stringify([...list,movie]));
  }

  return (
    <div>
      <Navbar/>
      <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {movies.map(m=><MovieCard key={m.id} movie={m} onClick={setSelected}/>)}
      </div>
      <MovieModal movie={selected} onClose={()=>setSelected(null)} onSave={save}/>
    </div>
  );
}
