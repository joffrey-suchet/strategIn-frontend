import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenus</h1>
      <p>Veuillez vous connectez ou créer un compte</p>
      <div className="connexion">
        <Link to={"/Login"} className="button">
          <h2>Connectez vous</h2>
        </Link>
        <Link className="button" to={"/Register"}>
          <h2>Créer un compte</h2>
          <p></p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
