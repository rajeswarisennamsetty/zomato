import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import './App.css'
import Index from './pages/Index'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <Index />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
      </Routes>
    </div>
  )
}

export default App

