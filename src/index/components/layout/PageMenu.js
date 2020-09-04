import React from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link, NavLink} from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, DashboardOutlined} from '@ant-design/icons';
import {MainPanel,SystemSetting} from '../../components'
const { SubMenu } = Menu;
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
class PageMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let menuItem = [
            {
                "label": '主控面板',
                "icon": <DashboardOutlined />,
                "link": '/',
                "children": []
            },
            {
                "label": '系统设置',
                "icon": <SettingOutlined />,
                "children": [
                    {
                        "link": '/system_setting',
                        "name": '城市'
                    }
                ]
            }
        ];
        return(

            <Router hashType={"hashbang"}>
                <Menu className="site-layout-theme" mode="inline">
                    <Menu.Item key="sub1" icon={ <DashboardOutlined />}>
                        <Link to="/">主控面板</Link>
                    </Menu.Item>

                    <SubMenu key="sub4" icon={<SettingOutlined />} title="设置">
                        <Menu.Item key="9"><Link to="/system_setting">系统设置</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Router>
        )
    }

}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PageMenu)