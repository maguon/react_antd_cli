import React from 'react';
import {connect} from 'react-redux';
import { Layout,Breadcrumb } from 'antd';
import PageMenu from './PageMenu'

import {HashRouter as Router, Route, Link, NavLink} from "react-router-dom";
import {MainPanel,SystemSetting} from '../../components'
const {  Content } = Layout;


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

class PageContent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        //
        const {} = this.props;
        return (
            <Content style={{ margin: '0 16px' }}>
                <Router hashType={"hashbang"}>
                {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
                </Router>
            </Content>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PageContent)