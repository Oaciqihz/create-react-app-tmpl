import routes from "@/router";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { useRoutes } from "react-router-dom";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

export default function DefaultLayout(params) {

    const outlet = useRoutes(routes);
    const headerStyle = {
        width: "100%",
        height: "55px",
        lineHeight: '55px',
        padding: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        position: "fixed",
        color: "#fff",
        zIndex: 999
    };
    const contentStyle = {
        minHeight: "calc(100vh - 300px)",
        backgroundColor: '#fff',
    };
      
    const footerStyle = {
        height: "300px",
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#000',
    };

    return (
        <Layout>
            <Header style={headerStyle}>
                <AppHeader />
            </Header>
            <Content style={contentStyle}>
                { outlet }
            </Content>
            <Footer style={footerStyle}>
                <AppFooter />
            </Footer>
        </Layout>
    )
}