import { MantineProvider, Container, Stack, Title } from '@mantine/core'
import { QueryClientProvider } from 'react-query'

import client from './client'
import Login from './Login'
import StopWatch from './StopWatch'
import Logger from './Logger'
import GPS from './GPS'
import WebWorker from './WebWorker'
import GlobalState from './GlobalState'

function App() {
  return (
    <Container>
      <Stack>
        <Title>Login</Title>
        <Login />
        <Title>Stopwatch</Title>
        <StopWatch />
        <Title>Logger</Title>
        <Logger />
        <Title>GPS</Title>
        <GPS />
        <Title>Webworker</Title>
        <WebWorker />
        <Title>GlobalState</Title>
        <GlobalState />
      </Stack>
    </Container>
  )
}

function WrappedApp() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default WrappedApp
