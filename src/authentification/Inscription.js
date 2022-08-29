import React from "react";
// import { Link } from "react-router-dom";
import './authentification.css'

const Inscription = () => {
  return (
    <div id="authentification">
      <div className="box">
        <div className="bg-image"></div>
        <div className="box-form">
          <form>
            <div className="box-info">
              <input type="text" name="login" placeholder="Nom" />
              <input type="text" name="prenom" placeholder="Prenom" />
              <input type="text" name="login" placeholder="Login" />
              <input type="password" name="password" placeholder="Password" />
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
              <button type="button" className="btn-inscrire">
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
