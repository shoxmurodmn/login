import { StrictMode } from 'react'
import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
