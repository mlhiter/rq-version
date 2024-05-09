import { Text } from '@mantine/core'
import { useRef } from 'react'
import { useQuery } from 'react-query'

function createStopWatch() {
  const startTime = Date.now()
  return () => {
    return Math.round((Date.now() - startTime) / 1000)
  }
}

const StopWatch = () => {
  const timerRef = useRef(createStopWatch())
  const { data: time } = useQuery('time', timerRef.current, {
    refetchInterval: 1000,
  })

  return <Text>Time {time}</Text>
}

export default StopWatch
