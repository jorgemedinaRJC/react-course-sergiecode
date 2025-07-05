import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import { ContadorApp } from './ContadorApp/ContadorApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContadorApp value={0}></ContadorApp>
  </StrictMode>,
)
