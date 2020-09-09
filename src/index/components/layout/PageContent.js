import React from 'react';
import {connect} from 'react-redux';

import {Route} from "react-router-dom";
import Container from '@material-ui/core/Container';



class PageContent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        //
        const {routes} = this.props;
        return (
            <Container xs={12}>
                <div style={{minHeight: "64px"}}></div>

                {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}

            </Container>
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