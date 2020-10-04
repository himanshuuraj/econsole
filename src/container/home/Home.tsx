import React from 'react';
import { Sidebar } from "./../sidebar/sidebar";
import { MainContent } from '../maincontent/maincontent';
import { Header } from "./../../component/Header";
import { Row, Col, Layout } from 'antd';
import "./home.css";

export const Home = () => {
    
    return (
        <Layout>
            <Layout.Header>
                <Header />
            </Layout.Header>
            <Layout>
                <Layout.Sider>
                    <Sidebar />
                </Layout.Sider>
                <Layout.Content>
                    <MainContent />
                </Layout.Content>
                <Layout.Sider>right sidebar</Layout.Sider>
            </Layout>
            <Layout.Footer>footer</Layout.Footer>
        </Layout>
    )
}