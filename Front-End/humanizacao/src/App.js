import React from 'react'
import Router from './routes/Router'
import { Theme } from './components/Theme'
import { ThemeProvider } from '@material-ui/styles'

const App = () => {
  return (
    <ThemeProvider Theme={Theme}>
    <Router />
    </ThemeProvider>
  )
}

export default App;
