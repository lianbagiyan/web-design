import React, { useState } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import HeaderLogo from '../../assets/logo.png';
import './style.scss';

const { Header } = Layout;

const HeaderBlock = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const menuItems = Array(7).fill(null);

  return (
    <Header className="header">
      <img
        src={HeaderLogo}
        alt="Logo"
        className="header__logo"
        loading="lazy"
      />

      <div className="menu-container">
        <div className="menu-large">
          <Menu
            mode="horizontal"
            items={menuItems.map((_, i) => ({
              key: `${i}`,
              label: 'Menu link',
            }))}
          />
        </div>

        <div className="toggle-button" onClick={showDrawer}>
          <MenuOutlined />
        </div>

        <Drawer
          title="Menu"
          placement="right"
          closable={false}
          onClose={onCloseDrawer}
          open={drawerVisible}
          className="small-drawer"
        >
          <Menu
            mode="vertical"
            items={menuItems.map((_, i) => ({
              key: `${i}`,
              label: 'Menu link',
            }))}
          />
        </Drawer>
      </div>
    </Header>
  );
};

export default HeaderBlock;
