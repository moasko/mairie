import React from 'react'
import {
    HomeOutlined
  } from '@ant-design/icons';
  import { Link } from 'react-router-dom';
  import { Menu,Layout } from 'antd';

function SideBar() {

    const {Sider } = Layout;
    
  return (
    <Sider
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
    }}
  >
    <div style={{
      height: "32px",
      margin: "16px",
      background: "rgba(255, 255, 255, 0.3)"
    }}></div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}  >
      <Menu.Item icon={<HomeOutlined />}>
        <Link to="/" title="Accueil">
          Accueil
        </Link>
      </Menu.Item>

      <Menu.Item icon={<HomeOutlined />}>
        <Link to="/moto" title="Motos">
          Motos
        </Link>
      </Menu.Item>

      <Menu.Item icon={<HomeOutlined />}>
        <Link to="/agent" title="agents">
         Agents
        </Link>
      </Menu.Item>


    </Menu>
  </Sider>
  )
}

export default SideBar