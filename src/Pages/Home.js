import NavBar from "../components/NavBar/NavBar";
import Vignette from "../components/Vignette/Vignette";

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <Vignette
        src="./images/Le_big_message_de_kanki.png"
        alt="Kanki thrashing shin"
        size={600}
      />
      <p>Here's some content...</p>
    </div>
  );
}

export default Home;
