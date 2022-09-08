import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // fonction pour creer un compte
  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      setErrorMessage("");

      //je verifie que le mot de passe soit renseigné et identique a sa confirmation
      if (password && password === confirmPassword) {
        const response = await axios.post(
          "https://strategin-backend.herokuapp.com/register",
          {
            email: email,
            name: name,
            password: password,
          }
        );
        if (response.data) {
          console.log("J'ai reussi à créer un compte !");
          alert("compte créer");
          // redirection vers la page home
          navigate("/");
        }
      } else {
        setErrorMessage("Les mots de passe sont différents");
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <form className="form" onSubmit={handleSignup}>
      <h1>Créer votre compte</h1>
      <div className="line">
        <p>Votre prénom</p>{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="david"
        />
      </div>
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
      <div className="line">
        <p>Confirmer votre mot de passe</p>{" "}
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="******"
        />
      </div>
      <input className="validation" type="submit" value="S'inscrire" />
      <p className="error">{errorMessage}</p>
    </form>
  );
};

export default Register;
