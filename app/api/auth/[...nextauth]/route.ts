import NextAuth from "next-auth";
   import GoogleProvider from "next-auth/providers/google";
   import { NextAuthOptions } from "next-auth";

   // Define your NextAuth options
   export const authOptions: NextAuthOptions = {
     providers: [
       GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
       }),
     ],
   };

   const handler = NextAuth(authOptions);

   export { handler as GET, handler as POST };