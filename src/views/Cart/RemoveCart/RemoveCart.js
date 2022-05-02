import { StyledButton } from 'views/Cart/styles'

const RemoveCart = ({ clearCart }) => {

  const handleRemoveCart = event => {
    event.preventDefault()

    clearCart()
  }

  return (
    <StyledButton className='clearCart' onClick={handleRemoveCart}>Clear Cart</StyledButton>
  )
}

export default RemoveCart
