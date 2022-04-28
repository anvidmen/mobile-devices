import { getMobileDevices } from 'api'

const retrieveMobileDevices = async () => {
  try {
    const { data } = await getMobileDevices()
    return data.map(({ id, brand, model, price, imgUrl }) => {
      return {
        id, brand, model, price, imgUrl
      }
    })
  } catch (error) {
    console.log(error)
    throw new Error('Not mobile devices found')
  }
}

export default retrieveMobileDevices
