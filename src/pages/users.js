import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Au chargement je récupère les données des utilisateurs
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:3002/users");

        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return isLoading ? (
    <div>
      <h1>Chargement des données</h1>
    </div>
  ) : (
    <div className="liste">
      <h1>Liste des Utilisateurs</h1>
      <div>
        {data.map((user, index) => {
          return (
            <div className="user" key={index}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
