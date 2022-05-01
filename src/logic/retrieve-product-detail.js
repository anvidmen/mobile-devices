
import { getProductDetail } from 'api'

const retrieveProductDetail = async id => { 
  try {
    const response = await getProductDetail(id)
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Id entered is not correct')
  }
}

export default retrieveProductDetail