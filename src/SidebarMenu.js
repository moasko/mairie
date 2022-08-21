import React, { useState } from "react";
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
import {
  HomeOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  
  const { Sider } = Layout;
  const [state, setState] = useState({ collapsed: false });

  const onCollapse = (collapsed) => {
    setState({ collapsed });
  };

  const { collapsed } = state;

  return (
    <Sider
      className="pt-4"
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className="styleLogo">
        {/* <img src={logo} width={80} alt="logo Prosuma" /> */}
      </div>
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        {/* <Link to = "/"> */}
        <Menu.Item key="1"  className="layoutColor" icon={<HomeOutlined />}>
          Accueil
        </Menu.Item>
        {/* </Link> */}
       
        <Menu.Item key="9" icon={<PoweroffOutlined />} >
          Déconnexion
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarMenu;

