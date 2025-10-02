import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
        }

        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        if (user && user.password === credentials.password) {
          if (!user.active) {
            throw new Error("User is inactive. Please contact support.");
          }
          return {
            id: user.id,
            username: user.username,
            property: user.property,
            email: user.email,
            phone: user.phone,
            propertyAddress: user.propertyAddress,
            propertyCode: user.propertyCode,
            position: user.position,
            name: user.name,
          };
        }
        throw new Error("Invalid username or password");
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.property = user.property;
        token.email = user.email;
        token.phone = user.phone;
        token.propertyAddress = user.propertyAddress;
        token.propertyCode = user.propertyCode;
        token.position = user.position;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.property = token.property;
        session.user.email = token.email;
        session.user.phone = token.phone;
        session.user.propertyAddress = token.propertyAddress;
        session.user.propertyCode = token.propertyCode;
        session.user.position = token.position;
        session.user.name = token.name;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};
