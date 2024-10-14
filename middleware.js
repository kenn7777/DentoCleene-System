import { NextResponse } from 'next/server'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
     
    const { isAuthenticated, getPermission } = getKindeServerSession();

    const isLoggedIn = await isAuthenticated();
    const adminPermission  = await getPermission('track:system');
    const patientPermission  = await getPermission('view:details');

   // if (!isLoggedIn && adminPermission && adminPermission.isGranted) {

    //      return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url));
     

          if (!isLoggedIn) {
            if (adminPermission && adminPermission.isGranted) {
                return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url));
            }
            if (patientPermission && patientPermission.isGranted) {
                return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/patientboard', request.url));
            }
        } else {
            // Handle logged-in users with specific permissions
            if (adminPermission && adminPermission.isGranted) {
                return NextResponse.redirect(new URL('/dashboard', request.url));
            }
            if (patientPermission && patientPermission.isGranted) {
                return NextResponse.redirect(new URL('/patientboard', request.url));
            }
        }
    
        // Default behavior if no conditions are met
      //  return NextResponse.next();



  }


 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard:path*', '/dashboard/patients:path*', '/dashboard/adjustments:path*', '/patientboard:path*'],
}


