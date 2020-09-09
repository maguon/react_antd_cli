import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";


import {Collapse,Divider,Drawer,IconButton,List,ListItem,ListItemText,ListItemIcon} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {ChevronLeft,ExpandLess,ExpandMore} from '@material-ui/icons';

const styles = theme => ({
    menuItem :{
        paddingLeft:"20px"
    },
    toggleIcon:{
        display: "flex",
        padding: "0 8px",
        minHeight: "56px",
        alignItems: "center",
        justifyContent: "flex-end",
        minWidth:"220px"
    }

});

class PageMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {openArray: []};
    }
    componentDidMount (props){
        const {menuList} =this.props;
        let openArrayTemp = []
        menuList.map(function (menuItem,index) {
            openArrayTemp[index]= false;
        })
        this.setState({openArray:openArrayTemp});
    }

    render() {
        const {classes,menuList,open,onClose,pageHeaderReducer} =this.props;

        let self = this;
        const handleClick = (i) => {
            let openArrayTemp =[]
            menuList.map(function (menuItem,index) {
                if(i==index){
                    openArrayTemp[index]= !self.state.openArray[i];
                }else{
                    openArrayTemp[index]= false;
                }

            })
            this.setState({openArray:openArrayTemp});
        }
        return(

            <Drawer open={open} anchor={'left'} onClose={onClose} >
                <div  className={classes.toggleIcon} >
                    <IconButton onClick={onClose}>
                        <ChevronLeft />
                    </IconButton>
                </div>
                <Divider />
                <List >
                    {menuList.map(function (menuItem,index) {
                        return(
                            <div key={index}>
                                {menuItem.children.length===0 &&
                                <NavLink  exact className="MuiTypography-colorInherit " style={{textDecoration: "none"}} to={menuItem.link}>
                                    <ListItem button onClick={onClose} >
                                        <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                        <ListItemText primary={menuItem.label} />
                                    </ListItem>
                                </NavLink>
                                }
                                {menuItem.children.length>0 &&
                                <div>
                                    <ListItem button onClick={() => handleClick(index)}>
                                        <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                        <ListItemText primary={menuItem.label} />
                                        {self.state.openArray[index] ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={self.state.openArray[index]} timeout="auto">
                                        <List component="div" className={classes.menuItem}>
                                            {menuItem.children.map(function (subMenuItem,subIndex) {
                                                return (
                                                    <NavLink key={subIndex} exact  to={subMenuItem.link} className="MuiTypography-colorInherit " style={{textDecoration: "none"}} >
                                                        <ListItem button onClick={onClose}>

                                                            <ListItemIcon>
                                                                {subMenuItem.icon}
                                                            </ListItemIcon>
                                                            <ListItemText primary={subMenuItem.name} />

                                                        </ListItem>
                                                    </NavLink>
                                                )
                                            })}

                                        </List>
                                    </Collapse>
                                </div>
                                }


                            </div>

                        )
                    })}

                </List>
            </Drawer>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PageMenu))