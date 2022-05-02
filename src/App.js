import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from 'views/Cart/Cart'
import MobileDevices from 'views/MobileDevices/MobileDevices'
import ProductDetail from 'views/ProductDetail/ProductDetail'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<MobileDevices/>} />
        <Route path="/product-detail/:id" caseSensitive={false} element={<ProductDetail/>} />
        <Route path='/shopping-cart' caseSensitive={false} element={<Cart/>} />
      </Routes>
    </Router>
  )
}

export default App;
