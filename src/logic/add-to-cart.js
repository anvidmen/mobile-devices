import { postToCart } from 'api'

const addToCart = async (id, colorCode, storageCode) => {
    const data = { id: id, colorCode: colorCode, storageCode: storageCode }
    try {
        const response = await postToCart(data)
        const { data: { count } } = response
        return { count }
    } catch (error) {
        const { response: { data: { message } } } = error
        throw new Error(message)
    }
}

export default addToCart
