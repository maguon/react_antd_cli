import React from 'react';
import {connect} from 'react-redux';
import {PageHeader ,PageContent,PageMenu,MainPanel,SystemSetting} from  './components';
import {HashRouter as Router} from "react-router-dom";

import {CssBaseline} from '@material-ui/core';
import {Settings,SettingsSystemDaydream,Speed} from '@material-ui/icons';

import './App.css';

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


const menuList = [
    {
        "label": '主控面板',
        "icon": <Speed/>,
        "link": '/',
        "children": []
    },
    {
        "label": '设置',
        "icon": <Settings/>,
        "link": '/',
        "children": [
            {
                "link": '/system_setting',
                "name": '系统设置' ,
                "icon": <SettingsSystemDaydream/>
            }
        ]
    },
    {
        "label": '设置',
        "icon": <Settings/>,
        "link": '/',
        "children": [
            {
                "link": '/system_setting',
                "name": '系统设置',
                "icon": <SettingsSystemDaydream/>
            }
        ]
    }
];
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {drawerOpen:true};
    }

    componentDidMount() {

    }


    render() {

        const handleDrawerClose = () => {
            this.setState({drawerOpen:false});
        }
        const handleDrawerOpen = () => {
            this.setState({drawerOpen:true});
        }


        return (
            <Router hashType={"hashbang"}>
            <div>
                <CssBaseline />
                <PageHeader menuClick={handleDrawerOpen}/>
                <PageMenu menuList={menuList} open={this.state.drawerOpen} onClose={handleDrawerClose}/>
                <PageContent routes={routes}/>

            </div>
            </Router>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        pageHeaderReducer: state.PageHeaderReducer
    }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);