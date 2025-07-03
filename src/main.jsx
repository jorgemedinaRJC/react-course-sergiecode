import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import './styles/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente></PrimerComponente>
  </StrictMode>,
)
