import React from 'react';
import {connect} from 'react-redux';

class SystemSetting extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        //
        const {} = this.props;
        return (
            <div>
                System Setting
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SystemSetting)