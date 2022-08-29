import "./boostrap.css";
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "antd/dist/antd.css";
import Container from "./Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListeMotos from "./ListeMotos";
import ListeAgent from "./agent/ListeAgent";
import Dashboard from "./Dashboard";
import { Connexion, Inscription } from "./authentification";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Connexion />
        <Container>
          <Routes>
            <Route exact path="/Inscription" element={<Inscription />} />
            <Route exact path="/moto" element={<ListeMotos />} />
            <Route exact path="/agent" element={<ListeAgent />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
