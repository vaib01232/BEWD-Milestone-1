// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Login from './Components/Login'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import SignUp from './Components/SignUp'
import Home from './Pages/Homepage'
import {ProductForm} from './Components/ProductForm'


function App() {
  return (
<>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/" element={<Home/>}/>     
      <Route path="/productForm" element={<ProductForm/>}/>      
    </Routes>
</>
  )
}

export default App
