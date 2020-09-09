import React from 'react';
import {connect} from 'react-redux';

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
            <div style={{ textAlign: 'right',backgroundColor:"#6F6B83",color:"white" }}>鸿溧科技(大连)有限公司 ©2016 </div>
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