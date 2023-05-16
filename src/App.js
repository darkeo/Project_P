import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Vignette from "./components/Vignette/Vignette";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to my website!</h1>
      <Vignette
        src="./images/ki_kan_6632.webp"
        alt="Kanki thrashing shin"
        size={300}
        link="https://static.hitek.fr/img/actualite/ill_m/382925734/TrollFace.jpg"
        tab="_blank"
      />
      <p>Here's some content...</p>
    </div>
  );
}

export default App;
