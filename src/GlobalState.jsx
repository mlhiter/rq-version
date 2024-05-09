import { Text, TextInput, Stack } from '@mantine/core'
import { useQuery } from 'react-query'

import client from './client'

const StateEditor = () => {
  const { data: value } = useQuery('sharedText', () => '', {
    enabled: false,
  })

  return (
    <TextInput
      value={value}
      onChange={(evt) => {
        client.setQueryData('sharedText', evt.target.value)
      }}
    />
  )
}

const StateViewer = () => {
  const { data: value } = useQuery('sharedText', () => '', {
    enabled: false,
  })

  return <Text>{value}</Text>
}

const GlobalState = () => {
  return (
    <Stack>
      <StateEditor />
      <StateViewer />
    </Stack>
  )
}

export default GlobalState
