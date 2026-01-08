import { Route, Routes } from 'react-router'
import Navbar from './components/Navbars/Navbar'
import LandingPage from './pages/LandingPage/LandingPage'
import CartPage from './pages/CartPage/CartPage'
import AbminPage from './pages/AdminPage/AbminPage'
import { useState } from 'react'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<LandingPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="admin" element={<AbminPage />} />
      </Route>
    </Routes>
  )
}

export default App