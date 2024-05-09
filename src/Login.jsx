import { Text } from '@mantine/core'
import { useQuery } from 'react-query'

const fetchLogin = () => fetch('/login.json').then((res) => res.json())
const fetchUser = (id) => fetch(`/${id}.json`).then((res) => res.json())

const loginFn = async () => {
  const loginResp = await fetchLogin('/login.json')
  return await fetchUser(loginResp.id)
}

const Login = () => {
  const { data: user } = useQuery('login', loginFn)

  return <Text>{JSON.stringify(user)}</Text>
}

export default Login
