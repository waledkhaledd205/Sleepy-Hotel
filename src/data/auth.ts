import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/signIn",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth?.user; 
    },
  },
};
export const {
  auth,      
  signIn,    
  signOut,   
  handlers: { GET, POST }, 
} = NextAuth(authConfig);