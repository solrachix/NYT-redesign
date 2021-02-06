import React, { useState } from 'react'
import { ThemeProvider } from './styles/styled-components.d'
import GlobalStyle from './styles/GlobalStyle'

import Header from './components/Header'

import Routes from './routes/app'

import { DarkTheme } from './styles/themes'
import { Container } from './styles/App'

const App: React.FC = () => {
  const [theme, setTheme] = useState(DarkTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  )
}

export default App
