import routes from "@/router";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { useRoutes } from "react-router-dom";
import { Layout } from "antd";
import "@/style/container.scss";

const { Header, Footer, Content } = Layout;

export default function DefaultLayout(params) {

    const outlet = useRoutes(routes);
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
            <Header className="container-header">
                <AppHeader />
            </Header>
            <Content className="container-content">
                { outlet }
            </Content>
            <Footer className="container-footer">
                <AppFooter />
            </Footer>
        </Layout>
    )
}