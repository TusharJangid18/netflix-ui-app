export async function fetchMovies(){
  const res = await fetch("https://api.tvmaze.com/shows");
  return res.json();
}
