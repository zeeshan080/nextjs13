import { withAuth } from "next-auth/middleware"
import { NextRequest, NextResponse } from "next/server"

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log(req.nextauth.token)
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => {
//         if(!token){
//           return true
//         }
//         return false
//       },
//     },
//   },

// )

export const config = { matcher: ["/admin","/dashboard"] }

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/sign-in?userType=admin', request.url))
  }
}