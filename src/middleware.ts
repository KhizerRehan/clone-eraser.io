import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request: NextRequest) {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  console.log("Middleware", "isAuthenticated", isUserAuthenticated);

  if (!isUserAuthenticated) {
    return NextResponse.redirect(
      new URL("/api/auth/login?post_login_redirect_url=/khizer", request.url)
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard"],
};
