import React from 'react';
import {connect} from 'react-redux';

import {Typography} from '@material-ui/core';

class MainPanel extends React.Component {
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
                <Typography component="div" >
                    Main Panel
                </Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel)