import { Link } from 'react-router-dom'
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import GenericIcon from 'components/GenericIcon/GenericIcon'
import { Container, Routes, StyledNavbar } from './styles'

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Link to='/'>Shopping</Link>
        <Routes>
          <Link to='/'>
            <ShoppingBag />
            <GenericIcon calculateTotal={1} />
          </Link>
        </Routes>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar
