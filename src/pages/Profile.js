import React from "react";
export default function Profile(){
  const list=JSON.parse(localStorage.getItem("watchlist"))||[];
  return (
    <div>
      <h2>Watchlist</h2>
      {list.map(m=><p key={m.id}>{m.name}</p>)}
    </div>
  );
}
