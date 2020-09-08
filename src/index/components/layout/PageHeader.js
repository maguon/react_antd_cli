import React from 'react';
import {connect} from 'react-redux';
import {AppBar,Badge,IconButton,Toolbar,Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {Menu,Notifications,ExitToApp} from '@material-ui/icons';


const styles = theme => ({
    rowFlex :{
        flexGrow: 1
    }

});

class PageHeader extends React.Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }


    render() {
        //
        const {classes,menuClick,pageHeaderReducer} = this.props;
        return (
            <AppBar position="absolute">
                <Toolbar >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={menuClick}
                    >
                        <Menu />
                    </IconButton>

                    <img src="/logo144.png" style={{width:"48px"}}/>
                    <Typography component="h1" className={classes.rowFlex} variant="h6" color="inherit" noWrap >司机之家管理系统 </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <ExitToApp />
                    </IconButton>
                </Toolbar>
            </AppBar>

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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PageHeader))