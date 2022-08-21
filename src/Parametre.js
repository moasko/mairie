import React, { useState, useEffect } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import ListeMotos from "./ListeMotos";
import CrudMoto from "./CrudMoto";

const Parametres = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="Parametres" className="psm_view_page">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-11">
              <h5 className="psm_lib_title">
                <strong>Paramètres</strong>
              </h5>
            </div>
            <div className="col-1 text-right"></div>
          </div>
          <div className="row">
            <div className="col-12">
              <TabView
                activeIndex={activeIndex}
                onTabChange={(e) => setActiveIndex(e.index)}
              >
                <TabPanel header="Motos">
                  <CrudMoto />
                </TabPanel>
                <TabPanel header="Agent">
                  {/* <ListeMotos />CrudMoto */}
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parametres;
