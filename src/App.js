import { useEffect, useState } from "react";
import "./App.css"
import Main from "./Main";

const API_URL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
function App() {


  return(
    <div>
      <div className="grid">
    <Main />
    </div>
  </div>
 );
}

export default App;