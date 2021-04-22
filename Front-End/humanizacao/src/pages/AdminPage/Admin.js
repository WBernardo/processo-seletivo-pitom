import React, { useState } from 'react'
import axios from 'axios'
import { UseStyles } from '../../components/Styles'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useNgosList } from '../../hooks/useNgosList'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Categories = () => {
  useProtectedPage()

  const history = useHistory()

  const classes = UseStyles()
  
  const [ngos, setNgos] = useState(useNgosList())

  const deleteNgo = (id) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    axios.delete(`https://humanizacao.herokuapp.com/ngo/${id}/delete`, headers)
    .then((res)=> {
     // const newNgos = ngos.filter((ngo) => {
       // return ngo.id !== id
      //})
       // setNgos(newNgos)
    }).catch((err)=> {
      console.log(err)
    })
  }


    return (
        <React.Fragment>
        <NavBar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography variant="h5" align="center" color="textSecondary">
              Prezado Administrador, tenha bastante cautela ao realizar modificações. Siga todos
              os passos conforme as diretrizes!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={4}>
            {ngos.length && ngos.map((ngo) => (
              <Grid item key={ngo.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {ngo.name}
                    </Typography>
                    <Typography>
                      {ngo.cause}
                    </Typography>
                    <Typography>
                      {ngo.description}
                    </Typography>
                    <Typography>
                      {ngo.address}, {ngo.city}-{ngo.state}
                    </Typography>
                    <Typography>
                      {ngo.phone}
                    </Typography>
                    <Typography>
                      {ngo.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={()=> deleteNgo(ngo.id)}>
                      DELETAR
                    </Button>
                    <Button size="small" color="secondary">
                      EDITAR
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
    )
}

export default Categories
