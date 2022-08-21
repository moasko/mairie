import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import listeMoto from "./listeMoto.json";
import CustomSidebar from "./CustomSidebar";
import FormulaireMoto from "./FormulaireMoto";
import * as ServiceMoto from "./ServiceMoto";
import { useDispatch, useSelector } from "react-redux";
import { getMotos } from "./store/actions/moto";

const ListeMotos = () => {
  let emptyMoto = {
    id: null,
    code: "",
    model: "",
    description: "",
    year: null,
    owner: "",
    ownerPhone: "",
  };

  
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [moto, setMoto] = useState(emptyMoto);
  const [title, setTitle] = useState();

 const dispatch = useDispatch()
 const _motoListe = useSelector((data)=> data.motos.motos)

 console.log(_motoListe);

  useEffect(() => {
      obtenirLesMotos();
      setVisible(false)
    initFilters();
  }, []);

  const obtenirLesMotos = () => {
    ServiceMoto.obtenirLesMotos().then((data) => {
        dispatch(getMotos(data));
    }).catch((error) => {
        
    });
  }

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    setGlobalFilterValue("");
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const filterTable = (rowData) => {
    return (
      <div className="col-12">
        <div className="row d-flex">
          <div className="col-md-2">
            <Button
              type="button"
              icon="pi pi-filter-slash"
              label=""
              className="p-button-outlined"
              onClick={initFilters}
            />
          </div>
          <div className="col-7 col-md-7 text-right mb-2">
            <span className="p-input-icon-left w-100">
              <i className="pi pi-search" />
              <InputText
                className="w-100"
                value={globalFilterValue}
                onChange={onGlobalFilterChange}
                placeholder="Rechercher un produit"
              />
            </span>
          </div>
          <div className="col-md-3 text-right">
            <Button
              label="Ajouter"
              icon="pi pi-plus"
              className="p-button-sm psm_bg_dark psm_border_none"
              onClick={() => actionAjouter(rowData)}
            />
          </div>
        </div>
      </div>
    );
  };

  const action = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="psm_border_none psm_button_rounded_md  mr-2"
          onClick={() => actionModifier(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="psm_border_none psm_button_rounded_md  bg-danger mr-2"
          onClick={actionSupprimer}
        />
      </React.Fragment>
    );
  };

  const actionAjouter = (rowData) => {
    setVisible(true);
    setMoto(emptyMoto);
    console.log("ajouter", rowData.year);
  };


  const actionModifier = (famille) => {
    setMoto({ ...famille });
    setVisible(true);
    console.log("Modifier");
  };


//   const enregistrer = (moto) => {
//     setVisible(false);
//     console.log("enregistrer", moto);
//     }

    const creerUneNovelleMoto = (moto) => {
        ServiceMoto.creerUneNovelleMoto(moto).then(response => {
            if (response.success) {
                obtenirLesMotos()
                setMoto(emptyMoto)
                setVisible(false)
            }
        })
    }

    const enregistrer = (values) => {
        moto.model = values.model;
        if(moto.model){
            creerUneNovelleMoto(moto)
        }else{
            console.log("Veuillez saisir le nom du modèle");
        }
        
    };

    const supprimerUneMototo = (moto) => {
        ServiceMoto.supprimerUneMoto(moto.id).then(response => {
            if (response.success) {
                obtenirLesMotos()
                setMoto(emptyMoto)
                setVisible(false)
            }
        })
    }

    const actionSupprimer = (rowData) => {
        supprimerUneMototo(rowData);
      };


  const renderTable = () => {
    return (
      <div>
        <DataTable
          value={_motoListe.data}
          header={filterTable()}
          size="small"
          loading={loading}
          responsiveLayout="scroll"
          filters={filters}
          globalFilterFields={[
            "model",
            "code",
            "year",
            "ownerPhone",
            "owner",
            "createdAt",
          ]}
        >
          <Column field="code" sortable header="Code" style={{ width: "3%" }} />
          <Column
            field="model"
            header="Modèle"
            sortable
            //   style={{ width: "7%" }}
          />

          <Column
            field="year"
            header="Année"
            sortable
            style={{ width: "10%" }}
          />
          <Column
            field="owner"
            header="Propriétaire"
            sortable
            //   style={{ width: "10%" }}
          />
          <Column
            field="ownerPhone"
            header="Téléphone"
            sortable
            //   style={{ width: "10%" }}
          />

          <Column
            field="createdAt"
            header="Créé le"
            sortable
            //   style={{ width: "10%" }}
          />

          <Column header="Actions" body={action} />
        </DataTable>
        <CustomSidebar
          title={title ? "Ajout de moto" : "Modifier la moto"}
          position="right"
          className="p-sidebar-mdx"
          visible={visible}
          setVisible={setVisible}
          content={
            <FormulaireMoto
              setTitre={setTitle}
                enregistrer={enregistrer}
              moto={moto}
              key={1}
            />
          }
        />
      </div>
    );
  };

  return <div>{renderTable()}</div>;
};

export default ListeMotos;
