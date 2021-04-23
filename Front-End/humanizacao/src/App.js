import React from 'react'
import Router from './routes/Router'
import { theme } from './components/theme'
import { ThemeProvider } from '@material-ui/styles'
import GlobalState from './globalStates/GlobalState'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalState>
    <Router />
    </GlobalState>
    </ThemeProvider>
  )
}

export default App;
