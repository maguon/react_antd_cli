import React from 'react';
import {connect} from 'react-redux';
import {Link as RouterLink} from "react-router-dom";

import {Avatar,Box,Button,CssBaseline,Grid,Link,Paper,Step,Stepper,StepLabel,StepContent,TextField,Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../App.css'

import {ResetPasswordActionTypes} from "../types";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeStep: 0};
    }

    componentDidMount() {

    }
    render() {
       // const [activeStep, setActiveStep] = React.useState(0);

        const handleNext = () => {
            console.log(this.state.activeStep);
            this.setState({activeStep:this.state.activeStep +1})
        };
        const handleBack = () => {
            console.log(this.activeStep);
            this.setState({activeStep:this.activeStep -1})
        };
        const {resetPasswordReducer,setUserName,setPassword,setCaptcha} = this.props;
        return (
            <Grid container component="main" style={{height:"100vh"}}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className="Reset-bg-image" />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className="login-paper">
                        <Stepper  activeStep={this.state.activeStep} orientation="vertical">
                            <Step key={'输入用户名'}>
                                <StepLabel>{'输入用户名'}</StepLabel>
                                <StepContent>
                                    <Typography>{'请输入系统登录的用户名'}</Typography>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        label="username"
                                        name="username"
                                        autoFocus
                                        value={resetPasswordReducer.username}
                                        onChange={setUserName}
                                    />
                                    <div >
                                        <div>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                                fullWidth
                                            > 下一步
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                            <Step key={'请输入验证码'}>
                                <StepLabel>{'请输入验证码'}</StepLabel>
                                <StepContent>
                                    <Typography>{'请输入手机接收到的验证码'}</Typography>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="captcha"
                                        label="captcha"
                                        name="captcha"
                                        autoFocus

                                        value={resetPasswordReducer.captcha}
                                        onChange={setCaptcha}
                                    />
                                    <div >
                                        <div>
                                            <Button
                                                onClick={handleBack}>
                                                上一步
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                            > 下一步
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                            <Step key={'请输入新密码'}>
                                <StepLabel>{'请输入新密码'}</StepLabel>
                                <StepContent>
                                    <Typography>{'请输入您的新密码'}</Typography>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="password"
                                        label="password"
                                        name="password"
                                        autoFocus
                                        value={resetPasswordReducer.password}
                                        onChange={setPassword}
                                    />
                                    <div >
                                        <div>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={handleNext}
                                            > 完成
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        </Stepper>
                        <Link>
                            <RouterLink to='/'>
                                返回登录
                            </RouterLink>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        resetPasswordReducer: state.ResetPasswordReducer
    }
};

const mapDispatchToProps = (dispatch) => ({
    setUserName : (value) => {
        dispatch(ResetPasswordActionTypes.setUserName(value));
    },
    setCaptcha : (value) => {
        dispatch(ResetPasswordActionTypes.setCaptcha(value));
    },
    setPassword: (e) => {
        dispatch(ResetPasswordActionTypes.setPassword(e.target.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);