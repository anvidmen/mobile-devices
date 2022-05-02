import { useState, useEffect, useContext } from "react"
import { AppContext } from 'providers/AppProvider'
import { useParams, Link } from "react-router-dom"
import Body from "components/Body/Body"
import retrieveProductDetail from "logic/retrieve-product-detail"
import RadioGroup from "components/RadioGroup/RadioGroup"
import addToCart from "logic/add-to-cart"
import { Actions, Container, Content, Description, Image, Title, ButtonContainer, SubTitle, StyledButton } from "./styles"

const ProductDetail = () => {
    const [cartItems, setCartItems] = useContext(AppContext)
    const [productDetail, setProductDetail] = useState({})
    const {
        brand, model, price, cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCmera, dimentions, weight, imgUrl, options
    } = productDetail
    const [colorCode, setColorCode] = useState("")
    const [storageCode, setStorageCode] = useState("")
    const { id } = useParams()

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const productDetails = await retrieveProductDetail(id)
                setProductDetail(productDetails)

                const colors = productDetails.options?.colors
                const storages = productDetails.options?.storages
                if (colors?.length) setColorCode(colors[0].code)
                if (storages?.length) setStorageCode(storages[0].code)
            } catch (error) {
                console.log(error)
            }
        }
        getProductDetails()
    }, [id])

    
    const addToCartItem =  async product => {
        const data = await addToCart(product.id, colorCode, storageCode)

        const exist = cartItems.find((item) => item.id === product.id)

        if (exist) {
            setCartItems(prevCartItems => {
                const quantity = exist.qty + 1
                const updatedCartItem = { ...exist, qty: quantity, totalPrice: quantity * product.price, colorCode: colorCode, storageCode: storageCode, data }
                return prevCartItems.map(item => item.id === product.id ? updatedCartItem : item)
            })
        } else {
            const newCartItem = { ...product, qty: 1, totalPrice: product.price, discount: 0, colorCode: colorCode, storageCode: storageCode, data }
            setCartItems(prevCartItems => [...prevCartItems, newCartItem])
        }
    }

    return (
        <Body title={`Mobile details / ${model}`}>
            <Container >
                <Title>{brand}</Title>
                <Content>
                    <Image src={imgUrl} alt={model} />
                    <div>
                        <Description>
                            <SubTitle>Description</SubTitle>
                            <h4><strong>Brand:</strong> {brand}</h4>
                            <h4><strong>Model:</strong> {model}</h4>
                            {price ? <h4><strong>Price:</strong> {price}€</h4> : <h4><strong>Price:</strong> Price not available</h4>}
                            <h4><strong>CPU:</strong> {cpu}</h4>
                            <h4><strong>RAM:</strong> {ram}</h4>
                            <h4><strong>Operative system:</strong> {os}</h4>
                            <h4><strong>Display resolution:</strong> {displayResolution}</h4>
                            <h4><strong>Battery:</strong> {battery}</h4>
                            <h4><strong>Cameras:</strong> primary: {primaryCamera}, secondary: {secondaryCmera}</h4>
                            <h4><strong>Dimentions:</strong> {dimentions}</h4>
                            <h4><strong>Weight:</strong> {weight}</h4>
                        </Description>
                        <Actions>
                            <SubTitle>Actions</SubTitle>
                            <div>
                                {options?.colors && <RadioGroup options={options.colors} title="Colors" defaultValue={colorCode} setValue={setColorCode} />}
                            </div>
                            <div>
                                {options?.storages && <RadioGroup options={options.storages} title="Storages" defaultValue={storageCode} setValue={setStorageCode} />}
                            </div>
                        </Actions>
                    </div>
                </Content>
                <ButtonContainer>
                    {price && price ?
                        <StyledButton aria-label="add to cart" className='styleButton' onClick={() => addToCartItem(productDetail)}>
                            Add to cart
                        </StyledButton> :
                        <StyledButton disabled aria-label="not available" className='styleButton'>
                            not available
                        </StyledButton>
                    }
                    <Link to='/'>Go to the store</Link>
                </ButtonContainer>
            </Container>
        </Body>
    )
}

export default ProductDetail
