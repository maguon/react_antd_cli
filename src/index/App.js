import React from 'react';
import { Layout,Menu } from 'antd';
import './App.css';
import {PageHeader,PageFooter ,PageContent,PageMenu,MainPanel,SystemSetting} from  './components';
import {HashRouter as Router, Route, Link, NavLink} from "react-router-dom";
import { MailOutlined, AppstoreOutlined, SettingOutlined, DashboardOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;
const {  Content,Sider } = Layout;


const routes = [
    {
        path: "/",
        exact: true,
        component: MainPanel
    },
    {
        path: "/system_setting",
        exact: true,
        component: SystemSetting
    }
];
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {
        const {} = this.props;
        return (
            <Layout>
                <PageHeader/>
                <Layout style={{ minHeight: '100vh' }}>
                    <Router hashType={"hashbang"}>
                        <Sider theme="light" collapsible className="site-layout-theme" >


                                <Menu className="site-layout-theme" mode="inline">
                                    <Menu.Item key="sub1" icon={ <DashboardOutlined />}>
                                        <Link to="/">主控面板</Link>
                                    </Menu.Item>

                                    <SubMenu key="sub4" icon={<SettingOutlined />} title="设置">
                                        <Menu.Item key="9"><Link to="/system_setting">系统设置</Link></Menu.Item>
                                    </SubMenu>
                                </Menu>
                            <div >
                                <div style={{position: "relative",height:"20px"}}>

                                </div>
                            </div>
                        </Sider>
                        <Content style={{ margin: '0 16px' }}>
                            {routes.map((route, index) => (
                                // Render more <Route>s with the same paths as above, but different components this time.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                        </Content>
                    </Router>
                    <Layout className="site-layout">
                        <PageFooter/>
                    </Layout>
                </Layout>

            </Layout>
        )

    }
}


export default App;