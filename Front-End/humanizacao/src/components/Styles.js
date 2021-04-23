import { makeStyles } from '@material-ui/core/styles'

export const UseStyles = makeStyles((theme) => ({
    AppBar: {
      boxShadow: 'none',
    },
    logo: {
      height: 40,
      marginRight: theme.spacing(50)
    },
    menuButton: {
      marginRight: theme.spacing(2)
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
    },
    icon: {
      marginRight: theme.spacing(2)
    },
    heroContent: {
      paddingTop: theme.spacing(15),
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2)
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    button: {
      marginLeft: theme.spacing(40),
    },
    root: {
      height: '100vh',
    },
    imageLogin: {
      backgroundImage: 'url(https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paperLogin: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatarLogin: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    formLogin: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submitLogin: {
      margin: theme.spacing(3, 0, 2),
    },
    buttonRegistration: {
      marginLeft: theme.spacing(40),
    },
    paperNgoRegistration: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2)
    },
    layoutNgoRegistration: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    buttonNgoRegistration: {
      marginRight: theme.spacing(40),
    },
    imageRegister: {
      backgroundImage: 'url(https://images.pexels.com/photos/4061216/pexels-photo-4061216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    imageRegister: {
      backgroundImage: 'url(https://images.pexels.com/photos/4061216/pexels-photo-4061216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paperRegister: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatarRegister: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    formRegister: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submitRegister: {
      margin: theme.spacing(3, 0, 2),
    },
  }));