import React from 'react';
import {connect} from 'react-redux';
import {Badge,Button,Layout,Menu} from 'antd';

import { DownloadOutlined } from '@ant-design/icons';

const {Header} = Layout;

class PageHeader extends React.Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }


    render() {
        //
        const {pageHeaderReducer} = this.props;
        return (
            <Header className="site-layout-theme App-header">
                <div className="logo">
                    <img src="/logo144.png" style={{width:"48px"}}/>
                    <span style={{marginLeft:30,fontWeight: "bold",fontSize: "20px",color:"white"}}>司机之家管理系统</span>
                </div>
                <Badge dot={true}>
                    <DownloadOutlined style={{color:"#ffffff"}} size={"large"}/>
                </Badge>
            </Header>

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

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)