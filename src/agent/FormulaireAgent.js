import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Form, Input } from "antd";
import { InputTextarea } from "primereact/inputtextarea";
import { creerUneNovelleMoto } from "../ServiceMoto";


const FormulaireAgent = (props) => {
  const [agent, setAgent] = useState(props.agent);
  const [value1, setValue1] = useState("");

  useEffect(() => {
    setAgent(props.agent);
  }, []);


  const enregistrer = (values) => {
    console.log("values ", values);
    if (Object.keys(values).length === 0) {
      props.setVisible(false);
      return false
    } else {
      creerUneNovelleMoto(values).then((res) => {
        props.setVisible(false);
        console.log("res ", res);
      }).catch((err) => {
        console.log("err ", err);
      });

    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // console.log(props.categorie);

  return (
    <div id="FormulaireFamille">
      <Form
        name="basic"
        initialValues={{
          // code: agent.code || "12547",
          id: agent.id,
          createdAt: agent.createdAt,
          user_name: agent.user_name,
          phone: agent.phone,
          marie_id: agent.marie_id,
        }}
        onFinish={enregistrer}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <div className="center-around">
          {/* <Form.Item
            label="Code"
            name="code"
            className=" col-md-5"
          >
            <Input
              disabled
              className="p-inputtext p-inputtext-sm border_radius_6px"
            />
          </Form.Item> */}
          <Form.Item
            label="Nom"
            name="user_name"
            rules={[
              {
                required: true,
                message: "Le modèle est obligatoire.",
              },
            ]}
            className=" col-md-5"
          >
            <Input className="p-inputtext p-inputtext-sm border_radius_6px" />
          </Form.Item>
        </div>

        <div className="center-around">
          <Form.Item
            label="Date d'achat"
            name="createdAt"
            rules={[
              {
                required: true,
                message: "L'année est obligatoire.",
              },
            ]}
            className=" col-md-5"
          >
            <Input className="p-inputtext p-inputtext-sm border_radius_6px" />
          </Form.Item>
          {/* <Form.Item
            label="Propriétaire"
            name="owner"
            rules={[
              {
                required: true,
                message: "Le nom est obligatoire.",
              },
            ]}
            className=" col-md-5"
          >
            <Input className="p-inputtext p-inputtext-sm border_radius_6px" />
          </Form.Item> */}
        </div>
        <div className="center-around">
          <Form.Item
            label="Téléphone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Le numéro est obligatoire.",
              },
            ]}
            className=" col-md-5"
          >
            <Input
              className="p-inputtext p-inputtext-sm border_radius_6px"
              prefix="+225"
            />
          </Form.Item>
          {/* <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "La description est obligatoire.",
              },
            ]}
            className=" col-md-5"
          >
            {/* <Input className="p-inputtext p-inputtext-sm border_radius_6px" /> 
            <InputTextarea
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              rows={1}
              cols={30}
            />
          </Form.Item> */}
        </div>

        {agent.id ? props.setTitre(false) : props.setTitre(true)}

        <Form.Item>
          <Button
            // label="Enregistrer"
            label={agent.id ? "Modifier" : "Enregistrer"}
            icon="pi pi-check"
            className="p-button-smx w-100 mt-3 psm_bg_dark psm_border_none"
          />
          {/* htmlType="submit"  */}
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormulaireAgent;
