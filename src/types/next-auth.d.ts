// import NextAuth, { DefaultSession } from 'next-auth';
import { User } from '@/components/model/user';

declare module 'next-auth' {
  interface Session {
    user: User;
    // user: {
    //   username: string;
    // } & DefaultSession['user'];
  }

  interface NextAuthOptions {
    app: Partial<PagesOptions> | undefined;
  }
}
