import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from 'providers/AppProvider'
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import GenericIcon from 'components/GenericIcon/GenericIcon'
import { Container, Routes, StyledNavbar } from './styles'

const Navbar = () => {
  const [ cartItems ] = useContext(AppContext)
  const numItems = () => {
    return cartItems.reduce((quantityItems, currentItem) =>
      quantityItems + currentItem.qty
    , 0)
  }
  
  return (
    <StyledNavbar>
      <Container>
        <Link to='/'>Store</Link>
        <Routes>
          <Link to='/shopping-cart'>
            <ShoppingBag />
            <GenericIcon calculateTotal={numItems()} />
          </Link>
        </Routes>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar
