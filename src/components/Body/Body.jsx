import Navbar from 'components/Navbar/Nabvar'
import { Childrens, StyledBody } from './styles'
import Header from 'components/Header/Header'

const Body = ({ children, title }) => {
  return (
    <StyledBody >
      <Navbar />
      <Header title={title} />
      <Childrens>{children}</Childrens>
    </StyledBody>
  )
}

export default Body