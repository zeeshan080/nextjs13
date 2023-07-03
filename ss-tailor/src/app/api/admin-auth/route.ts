import { NextResponse } from "next/server";

const handler = async (request: Request) => {
  const {userEmail,userPassword} =await request.json();
  if (
    userEmail.toLowerCase() === "zeeshan922837@gmail.com" &&
    userPassword.toLowerCase() === "12345"
  ) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ failure: false });
};

export { handler as GET, handler as POST };
