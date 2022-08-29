import React from "react";
import { Link } from "react-router-dom";
import './authentification.css'

const Connexion = () => {
  return (
    <div id="authentification">
      <div className="box">
        <div className="bg-image"></div>
        <div className="box-form">
          <form>
            <div className="box-info">
              <input type="text" name="login" placeholder="Login" />
              <input type="password" name="password" placeholder="PassWord" />
              <div className="check">
                <input type="checkbox" name="" id="" />
                <span className="souvenir">souvenir de moi</span>
              </div>
              <button type="button">Se Connecter</button>
              <div className="lien">
                <Link to="">Mot de Passe Oublier</Link>
                <Link to="/Inscription">S'inscrire</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
