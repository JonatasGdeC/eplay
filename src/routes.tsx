import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Product'
import Cheackout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/product/:id" element={<Products />} />
    <Route path="/cheackout" element={<Cheackout />} />
  </Routes>
)

export default Rotas
