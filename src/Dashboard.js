import React from "react";
import { Divider, Progress } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  //liste des moto
  const _motoListe = useSelector((data) => data.motos.motos);

  const Box = (props) => {
    return (
      <div className="col-md-6 mb-3 mt-3">
        <Link to={props.lien}>
          <div
            style={{ border: props.border, backgroundColor:"#fff", height: "135px" }}
          >
            <div className="card-body center">
              <div>{props.icon}</div>
              <span
                style={{
                  width: "1px",
                  height: "70px",
                  backgroundColor: "gray",
                }}
              ></span>
              <div>
                <div className="card-title center">
                  <h4 className="psm_text_color_indigo">{props.libele}</h4>
                </div>
                <div className="text-start">
                  <h2 className="font-light mb-0 psm_text_color_indigo">
                    {props.nombreFactures}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div
      className="row"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <Box
        libele="Agents"
        nombreFactures={56}
        icon={<UserOutlined style={{ fontSize: "60px" }} />}
        lien="/agent"
      />
      <Box
        libele="Motos"
        nombreFactures={_motoListe.data ? _motoListe.data.length : 0}
        icon={<UserOutlined style={{ fontSize: "60px" }} />}
        lien="/moto"
      />

    </div>
  );
};

export default Dashboard;

{
  /* <div className="Dashboard col-md-12 pl-0 pr-0">
     


     <div className="DashboardBox" >
       <div className="DashboardLibelle">
         <h4>Factures</h4>
       </div>
       <div className="DashboardBoxCircle">
         <h6>{props?.informationsFactures?.nombreFactures ? props.informationsFactures.nombreFactures : 0}</h6>
       </div>
     </div>

     <div className="DashboardBox">
       <div className="DashboardLibelle">
         <h4>Signées</h4>
       </div>
       <div className="DashboardBoxCircle">
         <h6>{props?.informationsFactures?.nombreFacturesSignes ? props.informationsFactures.nombreFacturesSignes : 0}</h6>
       </div>
       <div className="DashboardBoxCircle">
         <h6>{props?.informationsFactures?.tauxFacturesSignes ? props.informationsFactures.tauxFacturesSignes : 0} %</h6>
       </div>
     </div>

     <div className="DashboardBox">
       <div className="DashboardLibelle">
         <h4>Réceptionnées</h4>
       </div>
       <div className="DashboardBoxCircle">
         <h6>{props?.informationsFactures?.nombreFacturesReceptionnes ? props.informationsFactures.nombreFacturesReceptionnes : 0}</h6>
       </div>
       <div className="DashboardBoxCircle">
         <h6>{props?.informationsFactures?.tauxFacturesReceptionnes ? props.informationsFactures.tauxFacturesReceptionnes : 0} %</h6>
       </div>
     </div>

     <div className="DashboardBox">
       <div className="DashboardLibelle">
         <h4>Taux Facture Ok</h4>
       </div>
       <div className="DashboardBoxCircle">
         <h6>{props?.informationsFactures?.tauxFacturesOk ? props.informationsFactures.tauxFacturesOk : 0} %</h6>
       </div>
       
     </div> */
}
