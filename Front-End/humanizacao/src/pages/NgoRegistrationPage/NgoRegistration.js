import React from 'react'
import axios from 'axios'
import { UseStyles } from '../../components/Styles'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useForm } from '../../hooks/useForm'
import { goToAdminPage } from '../../routes/Coordinator' 
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'


const NgoRegistration = () => {
    useProtectedPage()

    const classes = UseStyles()

    const history = useHistory()

    const [form, onChangeInput] = useForm({
      name: '',
      cause: '',
      category: '',
      description: '',
      address: '',
      city: '',
      state: '',
      responsible: '',
      phone: '',
      email: ''
    }) 
 
    const onSubmitNgoRegistration = (event) => {
      event.preventDefault()
      const body = {
        name: form.name,
        cause: form.cause,
        category: form.category,
        description: form.description,
        address: form.address,
        city: form.city,
        state: form.state,
        responsible: form.responsible,
        phone: form.phone,
        email: form.email
      }

      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        }
      }
  
      axios.post("https://humanizacao.herokuapp.com/ngo/create", body, headers)
      .then((response) => {
        goToAdminPage(history)
      })
      .catch((err) => {
        alert("Erro ao realizar Cadastro")
      })
    }

    return (
        <React.Fragment>
        <main className={classes.layoutNgoRegistration}>
        <Paper className={classes.paperNgoRegistration}>
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Cadastre sua ONG abaixo:
      </Typography>
      <form onSubmit={onSubmitNgoRegistration}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={"Insira o nome da ONG"}
            name={"name"}
            onChange={onChangeInput}
            value={form.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={"Qual tipo de causa a entidade luta?"}
            name={"cause"}
            onChange={onChangeInput}
            value={form.cause}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label={"Digite a categoria mais aproximada. Os valores válidos são: Assistencia Social, Cultura, Saude, Meio Ambiente, Habitação ou Educacao e Pesquisa"}
            name={"category"}
            onChange={onChangeInput}
            value={form.category}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label={"Descreva resumidamente o que sua ONG faz para termos um mundo melhor"}
            name={"description"}
            onChange={onChangeInput}
            value={form.description}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={"Endereço e número da Instituição"}
            name={"address"}
            onChange={onChangeInput}
            value={form.address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           required
           fullWidth
           label={"Cidade"}
           name={"city"}
           onChange={onChangeInput}
           value={form.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={"Estado (Ex: CE, RN, SP...)"}
            name={"state"}
            onChange={onChangeInput}
            value={form.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={"Responsável pela Instituição"}
            name={"responsible"}
            onChange={onChangeInput}
            value={form.responsible}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label={"Digite o número da instituição ou responsável para contato"}
            name={"phone"}
            onChange={onChangeInput}
            value={form.phone}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            inputProps={{ pattern: "[A-Za-z0-9\\._-]+@[A-Za-z]+\\.[A-Za-z]+" }}
            required
            fullWidth
            label={"Digite o endereço de email da instituição ou responsável para contato"}
            name={"email"}
            type={"email"}
            onChange={onChangeInput}
            value={form.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button
              className={classes.submitLogin}
              variant={"contained"}
              fullWidth
              color={"secondary"}
              type={"submit"}
            >
              Realizar Cadastro
            </Button>
        </Grid>
      </Grid>
      </form>
      </Paper>
      </main>
    </React.Fragment>
    );
}

export default NgoRegistration
