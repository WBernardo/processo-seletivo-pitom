import React, { useState } from 'react'
import { UseStyles } from '../../components/Styles'
import { useNgosList } from '../../hooks/useNgosList'
import NavBar from '../../components/NavBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Categories = () => {
  const classes = UseStyles()

  const allNgos = useNgosList()

  const [filter, setFilter] = useState("all")

  const filteredNgos = allNgos.filter(ngo=> {
    if(filter === 'all') {
      return ngo
    } else {
      if(ngo.category === filter) {
       return ngo
      }  
    }
  })

    return (
        <React.Fragment>
        <NavBar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography variant="h5" align="center" color="textSecondary">
              Clique em uma das categorias abaixo para visualizar as Instituições de acordo
              com sua respectiva causa:
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={6} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=> setFilter("all")}>
                    Todos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=> setFilter("Cultura")}>
                    Cultura
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=> setFilter("Meio Ambiente")}>
                    Meio Ambiente
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=> setFilter("Saude")}>
                  Saúde
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=> setFilter("Habitacao")}>
                    Habitação
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=> setFilter("Assistencia Social")}>
                  Assistência Social
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=> setFilter("Educacao e Pesquisa")}>
                  Educação e Pesquisa
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={4}>
            {filteredNgos.map((ngo) => (
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
                      {ngo.address} {ngo.city}-{ngo.state}
                    </Typography>
                    <Typography>
                      {ngo.phone}
                    </Typography>
                    <Typography>
                      {ngo.email}
                    </Typography>
                  </CardContent>
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
