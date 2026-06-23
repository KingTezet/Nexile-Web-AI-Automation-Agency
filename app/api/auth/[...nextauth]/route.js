import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: Ganti bagian ini dengan query ke database Anda
        // (misal: Supabase/PostgreSQL) untuk mencocokkan email + password (hashed).
        //
        // Contoh placeholder sementara — WAJIB diganti sebelum production:
        if (
          credentials?.email === "demo@nexile.com" &&
          credentials?.password === "demo1234"
        ) {
          return {
            id: "1",
            name: "Demo User",
            email: "demo@nexile.com",
          };
        }

        // Kembalikan null jika kredensial tidak valid
        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

 // pages: {
 //   signIn: "/", // sign-in pakai modal di halaman utama, bukan halaman terpisah
  // },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };