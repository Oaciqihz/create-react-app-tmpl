import routes from "@/router";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { useRoutes } from "react-router-dom";
import { Layout } from "antd";
import "@/style/container.scss";
import "@/style/default.scss";

const { Header, Footer, Content } = Layout;

export default function DefaultLayout(params) {

    const outlet = useRoutes(routes);

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