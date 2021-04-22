import React from 'react'
import { goToAdminPage, goToCategoriesPage, goToLoginPage } from "../routes/Coordinator";
import { goToSignUpPage } from "../routes/Coordinator"; 
import { goToHomePage } from "../routes/Coordinator";
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { UseStyles } from '../components/Styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme({
palette: {
    primary: {
      main: '#00c4cc',
    },
    secondary: {
      main: '#037682',
    },
  },
})

const useStyles = makeStyles((theme) => ({
    AppBar: {
      boxShadow: 'none',
    },
    logo: {
      height: 40,
      marginRight: theme.spacing(50)
      },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    navCat: {
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8)
    },
    buttonLogin: {
        marginLeft: theme.spacing(10)
    },
    buttonRegister: {
        marginLeft: theme.spacing(3)
    }

  }))

const NavBar = () => {
    const classes = useStyles()
    const history = useHistory()

    return (
        <ThemeProvider theme={theme}>
        <AppBar color="inherit" className={classes.AppBar}>
            <Toolbar>
            <img src="/assets/logo.svg" alt="logo" className={classes.logo} style={{cursor:'pointer'}} onClick={() => goToHomePage(history)}/>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.navHome} style={{cursor:'pointer'}} onClick={() => goToHomePage(history)}>
                Home
            </Typography>
            <Typography variant="h6" className={classes.navCat} style={{cursor:'pointer'}} onClick={() => goToCategoriesPage(history)}>
                ONGs
            </Typography>
            <Typography variant="h6" className={classes.navAbt} style={{cursor:'pointer'}} onClick={() => goToAdminPage(history)}>
                ADMIN
            </Typography>
            <Button variant="outlined" color="secondary" className={classes.buttonLogin} onClick={() => goToLoginPage(history)}>Login</Button>
            <Button variant="outlined" color="primary" className={classes.buttonRegister} onClick={() => goToSignUpPage(history)}>Sign Up</Button>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}

export default NavBar
