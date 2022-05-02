import { useContext } from 'react'
import { AppContext } from 'providers/AppProvider'
import { Link } from 'react-router-dom'
import Body from 'components/Body/Body'
import CartItems from "views/Cart/CartItems/CartItems"
import RemoveCart from 'views/Cart/RemoveCart/RemoveCart'
import { ButtonItems, Container, ExtraButtons, Title } from './styles'

const Cart = () => {
  const [ cartItems, setCartItems ] = useContext(AppContext)
 
  const handleCheckout = () => setCartItems([])
  const handleDeleteCart = () => setCartItems([])

  const handleDeleteCartItem = productDetails => {
    const [ product ] = productDetails

    const exist = cartItems.find(item =>  item.id === product.id)
    if(!exist) return
  
    setCartItems(prevCartItems => {
      const quantity = 0;
      const updatedCartItem = { ...exist, qty: quantity, totalPrice: quantity * product.price }
      const newCartItems = prevCartItems.map(item => item.id === product.id ? updatedCartItem : item)
      return newCartItems.filter(({qty}) => qty )
    })
  }

  return (
    <Body>
      <Container>
        <Title>Your cart</Title>
        <CartItems cartItems={cartItems} removeItemCart={handleDeleteCartItem} />
        <ButtonItems>
          <ExtraButtons>
            { !!cartItems.length  &&<RemoveCart clearCart={ handleDeleteCart} /> }
            { !!cartItems.length  && <Link to='/'>Go to the store</Link> }
            { cartItems.length === 0 ? 
              <Link to='/'>Add a product!</Link> : 
              <Link to='/' onClick={handleCheckout} >Check Out</Link>
            }
          </ExtraButtons>
        </ButtonItems>
      </Container>
    </Body>
  )
}

export default Cart
