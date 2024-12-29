import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SlamBook from './SlamBook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SlamBook/>
  </StrictMode>,
)
