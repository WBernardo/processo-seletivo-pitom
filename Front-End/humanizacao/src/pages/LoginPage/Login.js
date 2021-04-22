import React from 'react'
import axios from 'axios'
import { UseStyles } from '../../components/Styles'
import { useForm } from '../../hooks/useForm'
import { goToCategoriesPage, goToSignUpPage } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'


const Login = () => {
    const classes = UseStyles()

    const history = useHistory()

    const [form, onChangeInput] = useForm({
      email: '',
      password: ''
    })

    const onSubmitLogin = (event) => {
      event.preventDefault()
      const body = {
        email: form.email,
        password: form.password
      }

      axios.post("https://humanizacao.herokuapp.com/users/login", body)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token)
        console.log(response.data)
        goToCategoriesPage(history)
      })
      .catch((Error) => {
        console.log(Error.message)
      })
    }

    return (
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.imageLogin} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paperLogin}>
          <Avatar className={classes.avatarLogin}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.formLogin} onSubmit={onSubmitLogin}>
            <TextField
              inputProps={{ pattern: "[A-Za-z0-9\\._-]+@[A-Za-z]+\\.[A-Za-z]+" }}
              variant={"outlined"}
              margin={"normal"}
              required
              fullWidth
              label={"Email"}
              name={"email"}
              type={"email"}
              onChange={onChangeInput}
              value={form.email}
            />
            <TextField
              variant={"outlined"}
              margin={"normal"}
              required
              fullWidth
              label={"Senha"}
              name={"password"}
              type={"password"}
              onChange={onChangeInput}
              value={form.password}
            />
            <Button
              className={classes.submit}
              variant={"contained"}
              fullWidth
              color={"secondary"}
              type={"submit"}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2" onClick={() => goToSignUpPage(history)}>
                  {"Ainda não tem conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default Login
