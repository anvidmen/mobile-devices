import calculateTotalPrice from 'utils/totalPrice'
import DeleteIcon from '@mui/icons-material/Delete'
import { Cart, Container, Item, Message, Price, StyledButton, Total } from './styles'

const CartItems = ({ cartItems, removeItemCart }) => {
  return (
    <Cart>
      <Container disable>
        <div>Products</div>
        <div>Name of product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Remove</div>
        <div>Total</div>
      </Container>
      {cartItems && cartItems.length ? (cartItems.map(item => (
        <Container key={item.id}>
          <Item><img src={item.imgUrl} alt={item.model} /></Item>
          <Item>{item.model}</Item>
          <Item>{item.price}€</Item>
          <Item>{item.qty}</Item>
          <Item>
            <StyledButton aria-label="remove item" className='styleButton' onClick={() => removeItemCart(cartItems)}>
              <DeleteIcon />
            </StyledButton>
          </Item>
          <Price>{item.totalPrice}€</Price>
        </Container>))) : (<Message>Your cart is empty</Message>)}
      <Total>
        <p>Total: </p><p>{calculateTotalPrice(cartItems)}€</p>
      </Total>
    </Cart>
  )
}

export default CartItems
