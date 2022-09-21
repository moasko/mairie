import React, { Component } from "react";
import { Avatar, Dropdown, Layout, Menu, Divider } from "antd";
import {
  PoweroffOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";

const PageHeader = () => {
  const { Header } = Layout;

  const menu = (
    <Menu>
      <Menu.Item key="2">
        <PoweroffOutlined /> &nbsp; Se déconnecter
      </Menu.Item>
    </Menu>
  );

  return (
    <div id="AppHeader">
      <Header className="p-0">
        <div className="container-fluid">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="col-12 col-md-4 text-left text-light">
              <span style={{ color: "white" }}>logo</span>
            </div>

            <div className="col-12 col-md-4 text-right">
              <Avatar icon={<UserOutlined />} /> &nbsp;
              <Dropdown overlay={menu}>
                <a
                  href="#/"
                  className="ant-dropdown-link text-light"
                  //   onClick={(e) => e.preventDefault()}
                >
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default PageHeader;
