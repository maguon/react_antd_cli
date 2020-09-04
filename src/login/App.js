import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import './App.css'


export default function App() {

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
                        欢迎使用****系统
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
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{margin:"25px 0"}}
                        >
                            登录
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    忘记密码
                                </Link>
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