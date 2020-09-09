import React from 'react';
import {connect} from 'react-redux';

import {Avatar,Box,Button,CssBaseline,Grid,Link,TextField,Paper} from '@material-ui/core'

import {Link as RouterLink} from "react-router-dom";

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import '../App.css'
import {LoginActionTypes} from "../types";
const loginAction = require('../actions/LoginAction');

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {

        const {loginReducer,login,setUserName,setPassword} = this.props;
        return (
            <Grid container component="main" style={{height:"100vh"}}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className="Bg-image" />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className="login-paper">
                        <Avatar style={{margin: 8,backgroundColor: "#f50057"}}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            欢迎使用****系统{loginReducer.username}
                        </Typography>
                        <form  noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={loginReducer.username}
                                onChange={setUserName}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={loginReducer.password}
                                onChange={setPassword}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{margin:"25px 0"}}
                                onClick={login}
                            >
                                登录
                            </Button>
                            <Grid container>
                                <Grid item xs>

                                        <RouterLink to='/reset'>
                                            忘记密码
                                        </RouterLink>
                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Typography variant="body2" color="textSecondary" align="center">
                                    {'Copyright © '}
                                    <Link color="inherit" href="https://myxxjs.com/">
                                        鸿溧科技(大连有限公司)
                                    </Link>{' 2016。'}
                                </Typography>
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        loginReducer: state.LoginReducer
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (values) => {
        dispatch(loginAction.login(values));
    },
    setUserName : (e) => {
        dispatch(LoginActionTypes.setUserName(e.target.value));
    },
    setPassword: (e) => {
        dispatch(LoginActionTypes.setPassword(e.target.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);