import { useState, useEffect } from 'react'
import Body from 'components/Body/Body'
import { Container } from './styles'
import Card from 'views/MobileDevices/Card/Card'
import retrieveMobileDevices from 'logic/retrieve-mobile-devices'

const MobileDevices = () => {
  const [mobileDevices, setMobileDevices] = useState([])

  useEffect(() => {
    const getMobileDevices = async () => {
      try {
        const mobileDevices = await retrieveMobileDevices()
        setMobileDevices(mobileDevices)
      } catch (error) {
        console.log(error)
      }
    }
    getMobileDevices()
  }, [])

  return (
    <Body title="Mobile devices">
      <Container>
        {mobileDevices && mobileDevices.map(mobileDevice => (
          <Card key={mobileDevice.id} mobileDevice={mobileDevice} />))
        }
      </Container>
    </Body>
  )
}

export default MobileDevices
