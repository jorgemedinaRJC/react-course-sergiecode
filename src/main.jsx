import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import { ContadorApp } from './ContadorApp/ContadorApp'
import { ListadoApp } from './ListadoApp/ListadoApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListadoApp />
  </StrictMode>,
)
