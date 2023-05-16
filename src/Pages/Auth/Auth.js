import AuthCSS from "./Auth.module.css";
import NavBar from "../../components/NavBar/NavBar";

import { useState } from "react";

const Auth = () => {
  // 1 states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validUsers, setValidUsers] = useState([
    ["Dorkyo", "Kaelthas905"],
    ["Sonio", "PoupetteMAX"]
  ]);

  const [loggedIn, setLoggedin] = useState("false");
  const [tryLog, settryLog] = useState("");

  // 2 comportements
  // function to search for text in file

  const HandleUsernameChanges = (event) => {
    setUsername(event.target.value);
  };

  const HandlePasswordChanges = (event) => {
    setPassword(event.target.value);
  };
  // EXERCIE POUR LE FUN MAIS METHODE DEBILE, A DELETE apres node.js(en dessous)
  const login = (event) => {
    event.preventDefault();
    const combination = [username, password];
    const IsIn = validUsers.some((arr) =>
      arr.every((val, i) => val === combination[i])
    );
    console.log(combination);
    if (IsIn) {
      setLoggedin("true");
      settryLog("");
    } else {
      setLoggedin("false");
      settryLog("erreur veuillez rentrer une combinaison valide ");
    }
  };

  // EXERCIE POUR LE FUN MAIS METHODE DEBILE, A DELETE apres node.js(au dessus)

  // 3 affichage (render)
  return (
    <>
      <NavBar />
      <h1>log state : {loggedIn}</h1>
      <form onSubmit={login}>
        <div className={AuthCSS.group}>
          <label htmlFor="login">Identifiant</label>
          <input
            value={username}
            type="text"
            name="login"
            onChange={HandleUsernameChanges}
          />
        </div>
        <div className={AuthCSS.group}>
          <label htmlFor="password">Mot de passe</label>
          <input
            value={password}
            type="password"
            name="password"
            onChange={HandlePasswordChanges}
          />
        </div>
        <div className={AuthCSS.group}>
          <button>Connexion</button>
        </div>
      </form>
      <h1 style={{ textAlign: "center" }}>{tryLog}</h1>
    </>
  );
};

export default Auth;
