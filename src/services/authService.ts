import axios from 'axios'

export async function authenticate({ email, password }: { email: string; password: string }) {
  const res = await axios.post(
    'https://paw-be.vercel.app/auth/signin',
    JSON.stringify({
      email,
      password,
    }),
  )
  return res?.data
}

export default authenticate
