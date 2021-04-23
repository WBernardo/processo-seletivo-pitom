import React from 'react'
import { Cards } from './Cards'
import { UseStyles } from './Styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Main = () => {
    const classes = UseStyles()

    return (
        <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              O que você está fazendo pelo mundo hoje?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Comece hoje a mudar o mundo! Ajude uma de nossas instituições cadastradas e colabore
              para um amanhã melhor que hoje. Um simples gesto de humanidade fará a diferença
              na vida de muitas pessoas!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {Cards.map((card) => (
              <Grid item key={card.text} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.text}
                    </Typography>
                    <Typography>
                      {card.desc}
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

export default Main
