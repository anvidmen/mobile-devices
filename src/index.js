import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App'
import reportWebVitals from './reportWebVitals'
import AppProvider from 'providers/AppProvider'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
)

reportWebVitals()
