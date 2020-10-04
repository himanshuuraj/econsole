import React, { useState } from 'react';
import "./sidebar.css";
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons'
const { Header, Sider, Content } = Layout;


export const Sidebar = () => {

    let [collapsed, setCollapsed] = useState(false);
    
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Configure Events
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Widgets
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                Monitor Widgets
            </Menu.Item>
          </Menu>
        </Sider>
    )
}