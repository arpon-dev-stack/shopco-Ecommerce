import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage/LandingPage'
import CartPage from './pages/CartPage/CartPage'
import AbminPage from './pages/AdminPage/AbminPage'
import Layout from './components/layout/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="admin" element={<AbminPage />} />
      </Routes>
    </Layout>
  )
}

export default App