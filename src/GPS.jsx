import { Text } from '@mantine/core'
import { useQuery } from 'react-query'

const getGPSCoordinates = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      (error) => {
        reject(error)
      }
    )
  })
}

const GPS = () => {
  const { data } = useQuery('gps', getGPSCoordinates, {
    refetchInterval: 1000,
  })
  return <Text>{JSON.stringify(data)}</Text>
}

export default GPS
