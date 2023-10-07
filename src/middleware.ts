import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'

// middleware is applied to all routes, use conditionals to select

const publicPages = ['/auth/signin', '/auth/signup']
const publicPathnameRegex = RegExp(`^(${publicPages.join('|')})?/?$`, 'i')

export default withAuth(() => {}, {
  callbacks: {
    authorized: async ({ req }) => {
      const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)
      const token = await getToken({ req })
      console.log('token bang', token)
      if (!isPublicPage && token === null) {
        return false
      }
      return true
    },
  },
})
