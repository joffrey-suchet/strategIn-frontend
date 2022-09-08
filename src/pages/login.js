import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // fonction pour se connecter
  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      if (email && password) {
        const response = await axios.post(
          "https://strategin-backend.herokuapp.com/login",
          {
            email: email,
            password: password,
          }
        );
        if (response.data.token) {
          Cookies.set("userToken", response.data.token);
          navigate("/users");
        }
      } else {
        setErrorMessage("veuillez remplir les champs libres");
      }
    } catch (error) {
      console.log("catch from handLogin ==>", error);
      setErrorMessage("Utilisateur non reconnue");
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h1>Connectez vous</h1>
      <div className="line">
        <p>Votre email</p>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="david@mail.com"
        />
      </div>
      <div className="line">
        <p>Votre mot de passe</p>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="******"
        />
      </div>

      <input className="validation" type="submit" value="Se connecter" />
      <p className="error">{errorMessage}</p>
    </form>
  );
};

export default Login;
