import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './Components/404'
import Cuadricula from './Components/Cuadricula'
import App from './Components/App'
import Home from './Components/Home'
import Criptopage from './Components/Cripto/Criptopage'
//import Menu from './Menu/Menu'
import Perfil from './Components/usuarios/perfil'
import { UserContexProvider } from './context/UserContext'
import Logeo from './Components/usuarios/Login'

createRoot(document.getElementById('root')).render(
  <UserContexProvider>
          <StrictMode> 
        <BrowserRouter>
          <Routes>

          <Route path='/' element ={<App/>}>
              <Route index element={<Home/>}/>
              <Route path= 'perfil' element ={<Perfil/>} />
          </Route>


          <Route path='/criptomonedas' element = {<App/>}>
            <Route index element = {<Cuadricula/>}/>
            <Route path=':id' element = {<Criptopage/>} />
          </Route>


          <Route path='/login' element = {<Logeo/>}/>

          <Route path ='*' element={<Pagina404/>}/>
          </Routes>
          </BrowserRouter>
      </StrictMode>
  </UserContexProvider>
)
