import type { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { axios } from '@/lib/axios'

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials) {
        const adminAccount = {
          email: 'admin@email.com',
          password: 'admin',
        }
        try {
          if (
            credentials?.email === adminAccount.email &&
            credentials.password === adminAccount.password
          ) {
            return {
              id: 0,
              email: adminAccount.email,
              name: 'admin',
              username: adminAccount.email,
              role: 'admin',
              accessToken: '',
            }
          }

          const res = await axios.post(
            '/auth/signin',
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
          /* eslint-disable */
          const data = res.data

          return {
            id: data?.id,
            email: data?.email,
            name: data?.name,
            username: data?.username ?? data.email,
            role: data?.roles?.[0],
            accessToken: data?.accessToken,
          }
        } catch (err) {
          // Backend is NOT okay, so we directly throw the error from backend
          const errMessage = (err as any).response
          if (errMessage) {
            throw new Error(JSON.stringify({ message: errMessage.data.message }))
          }
          // Backend is ok, but we have filter something that has to be error (like account not activated)
          else {
            throw new Error((err as any).message)
          }
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user }) {
      if (user) return true
      return false
    },
    async jwt({ token, user }: { token: any; user: any }) {
      console.log('JWT Callback', { token, user })

      // Initial sign in
      if (user) {
        // console.log('here')
        return {
          ...token,
          username: user?.username,
          role: user.role,
          accessToken: user.accessToken,
          id: user?.id,
          name: user?.name,
        }
      }
      // console.log('here')
      // Return previous token if the access token has not expired yet
      return token
    },
    async session({ session, token }) {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          role: token.role,
          accessToken: token.accessToken,
        },
      }
    },
  },
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    callbackUrl: {
      name: 'next-auth.callback-url',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    csrfToken: {
      name: 'next-auth.csrf-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
