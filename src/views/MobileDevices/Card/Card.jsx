import { CardContent, Image, StyleCard, TextContent, Title } from './styles'

const Card = ({ mobileDevice }) => {
    const { brand, model, price, imgUrl } = mobileDevice
    console.log( brand, model, price, imgUrl)
    return (
        <StyleCard>
            <Image src={imgUrl} alt={model} />
            <CardContent>
                <Title>{brand}</Title>
                <TextContent>{model}</TextContent>
                {price && <TextContent>€ {price}</TextContent>}
            </CardContent>
        </StyleCard>
    )
}

export default Card
