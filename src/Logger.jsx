import { Stack, Text } from '@mantine/core'
import { useQuery } from 'react-query'
const subscribeToLogs = () => {
  let logs = []
  let logIndex = 0

  setInterval(() => {
    logs.push(`${logIndex}: ${Date.now()}`)
    logIndex += 1
    logs = logs.slice(-3)
  }, 1000)

  return () => logs
}

const logListener = subscribeToLogs()

const Logger = () => {
  const { data: logs } = useQuery('logs', logListener, {
    refetchInterval: 1000,
  })

  return (
    <Stack>
      {logs?.map((entry, index) => (
        <Text key={index}>{entry}</Text>
      ))}
    </Stack>
  )
}

export default Logger
