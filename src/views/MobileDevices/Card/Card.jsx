import { Link } from "react-router-dom";
import { CardContent, Image, StyleCard, TextContent, Title } from './styles'

const Card = ({ mobileDevice }) => {
  const { brand, model, price, imgUrl, id } = mobileDevice
  return (
      <StyleCard>
        <Title>{brand}</Title>
        <Link to={`/product-detail/${id}`}>
          <Image src={imgUrl} alt={model} />
        </Link>
        <CardContent>
          <TextContent>{model}</TextContent>
          {price ? <TextContent>{price}€</TextContent> : <TextContent price>Price not available</TextContent>}
        </CardContent>
      </StyleCard>
  )
}

export default Card
