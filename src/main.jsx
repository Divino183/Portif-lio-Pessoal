import { StrictMode } from 'react'
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./Style/Theme/standard.js";
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './Style/globalStyle.js'
import Main from './pages/main'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={standardTheme}>
    <StrictMode>
      <Main />
      <GlobalStyles />
    </StrictMode>
  </ThemeProvider>,
)
