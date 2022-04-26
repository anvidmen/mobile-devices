import { Route, Switch } from 'react-router-dom'
import MobileDevices from 'views/MobileDevices'
import ProductDetail from 'views/ProductDetail'

const App = () => {
  return (
    <>
      <Switch>
        <Route exct path="/" component={MobileDevices} />
        <Route path='product-detail' component={ProductDetail} />
      </Switch>
    </>
  )
}

export default App;
