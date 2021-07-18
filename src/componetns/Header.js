import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button,Toolbar,AppBar,Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 3,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  
const Header = () => {
    const classes = useStyles()
    return (
        <>    
    <div className={classes.root}>
      <AppBar color="secondary" >
        <Toolbar>          
          <Typography className={classes.title} variant="h4" style={{flexGrow: 1}}>
           Header
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    </>
    )
}

export default Header
