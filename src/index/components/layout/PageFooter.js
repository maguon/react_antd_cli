import React from 'react';
import {connect} from 'react-redux';
import {Layout} from  'antd';
const {Footer} = Layout;

class PageFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        //
        const {} = this.props;
        return (
            <Footer style={{ textAlign: 'right',backgroundColor:"#6F6B83",color:"white" }}>鸿溧科技(大连)有限公司 ©2016 </Footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PageFooter)