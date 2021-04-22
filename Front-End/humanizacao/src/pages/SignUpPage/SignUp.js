import React from 'react'
import axios from 'axios'
import { UseStyles } from '../../components/Styles'
import { useForm } from "../../hooks/useForm"
import { goToHomePage, goToLoginPage } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'

const Register = () => {
    const classes = UseStyles()
    
    const history = useHistory()

    const [form, onChangeInput] = useForm({
      name: '',
      email: '',
      password: '',
      role: ''
    })

    const onSubmitRegister = (event) => {
      event.preventDefault()
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role
      }
      
      axios.post("https://humanizacao.herokuapp.com/users/signup", body)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token)
        goToHomePage(history)
      })
      .catch((err) => {
        alert("Erro ao realizar Cadastro")
      })
    }

    return (
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.imageRegister} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paperRegister}>
          <Avatar className={classes.avatarRegister}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastre-se
          </Typography>
          <form className={classes.formRegister} onSubmit={onSubmitRegister}>
            <TextField 
              
              variant={"outlined"}
              margin={"normal"}
              required
              fullWidth
              label={"Nome e Sobrenome"}
              name={"name"}
              type={"text"}
              onChange={onChangeInput}
              value={form.name}
            />
            <TextField
              inputProps={{ pattern: "[A-Za-z0-9\\._-]+@[A-Za-z]+\\.[A-Za-z]+" }}
              variant={"outlined"}
              margin={"normal"}
              required
              fullWidth
              label={"Endereço de Email"}
              name={"email"}
              onChange={onChangeInput}
              value={form.email}
            />
            <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label={"Insira uma senha"}
              name={"password"}
              type={"password"}
              onChange={onChangeInput}
              value={form.password}
            />
            </Grid>
            <Grid item xs={12} sm={7}>
            <TextField
              inputProps={{ pattern: "(PADRAO|ADMIN)" }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label={"Usuário PADRAO ou ADMIN?"}
              name={"role"}
              type={"text"}
              onChange={onChangeInput}
              value={form.role}
            />
            </Grid>
            <Button
              className={classes.submitRegister}
              variant={"contained"}
              fullWidth
              color={"secondary"}
              type={"submit"}
            >
              Realizar Cadastro
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2" onClick={() => goToLoginPage(history)}>
                  {"Já tem conta? Faça seu Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default Register