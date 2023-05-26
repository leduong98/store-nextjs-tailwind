import NextAuth, {getServerSession} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";

const adminEmails = ['leduong1998st@gmail.com'];

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: "67173183807-tgunv0hu74bpd25qj7l4uog3ejt9kf88.apps.googleusercontent.com",
      clientSecret: "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"
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({session,token,user}) => {
      // if (adminEmails.includes(session?.user?.email)) {
        return session;
      // } else {
      //   return false;
      // }
    },
  },
};

export default NextAuth(authOptions);

export async function isAdminRequest(req,res) {
  const session = await getServerSession(req,res,authOptions);
  // if (!adminEmails.includes(session?.user?.email)) {
  //   res.status(401);
  //   res.end();
  //   throw 'not an admin';
  // }
}
