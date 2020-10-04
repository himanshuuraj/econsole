import React, { useState } from 'react';
import { Layout, Menu, Row } from "antd";
import "./../container/home/home.css";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'


export const Header = () => {

    
    return (
        <div className="header">
          <MenuUnfoldOutlined />
        </div>
    )
}