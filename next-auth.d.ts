declare module "next-auth" {
   interface Session {
      id: string;
   }

   interface JWT {
      id: string;
   }
}

//this is a type definition file

//this will allow us to get the id from the token and add it to the session

//interface Session is for the session object and JWT is for the token object
