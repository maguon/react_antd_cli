import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {
        const routes = [
            {
                path: "/",
                exact: true,
                component: Login
            },
            {
                path: "/reset",
                exact: true,
                component: ResetPassword
            }
        ];
        return (
            <Router hashType={"hashbang"}>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
            </Router>

        );
    }


}

export default App;