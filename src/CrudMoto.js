import React, { useState, useEffect } from "react";
// import FormulaireFamille from "./FormulaireMoto";
import { Button } from "primereact/button";
import CustomSidebar from "./CustomSidebar";

import { Spin } from "antd";
import ListeMotos from "./ListeMotos";
import listeMoto from "./listeMoto.json";

const CrudMoto = () => {
  let emptyFamille = {
    id: null,
    libelle: "",
    actif: null,
  };

  const [motos, setMotos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [moto, setMoto] = useState(emptyFamille);
  const [titre, setTitre] = useState();
  const [loadingMoto, setLoadingMoto] = useState(false);

  useEffect(() => {
    setLoadingMoto(true);
    obtenirLesMotos();
    setLoadingMoto(false);
  }, []);

  const obtenirLesMotos = () => {
    setMotos(listeMoto)
  };
 
  const ajouter = () => {
    setVisible(true);
    setMoto(emptyFamille);
  };

  const editFamille = (famille) => {
    setMoto({ ...famille });
    setVisible(true);
  };

  return (
    <div id="CrudCategorie" className="psm_view_page">
      <div className="w-100 text-right">
        <Button
          label="Ajouter"
          icon="pi pi-plus"
          className="p-button-sm psm_bg_dark psm_border_none"
          onClick={ajouter}
        />
      </div>

      {loadingMoto ? (
        <Spin />
      ) : (
        <ListeMotos
          data={motos}
          // editFamille={editFamille}
        />
      )}

      <CustomSidebar
        title={titre ? "Ajout de famille" : "Modifier la famille"}
        position="right"
        className="p-sidebar-mdx"
        visible={visible}
        afficherSidebar={setVisible}
        // content={
        //   <FormulaireFamille
        //     setTitre={setTitre}
        //     // enregistrer={enregistrer}
        //     moto={moto}
        //     key={1}
        //   />
        // }
      />
    </div>
  );
};

export default CrudMoto;
