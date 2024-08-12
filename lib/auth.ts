import CredentialsProvider  from "next-auth/providers/credentials"

export const NEXT_AUTH_CONFIG = {
    providers:[
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                username:{label:'Email',type:'text',placeholder:'Email'},
                password:{label:"Password",type:'password',placeholder:'Password'}
            },
            async authorize(credentials:any) {

                return {
                    id:'user1',
                    name:'random-name',
                    email:'random-email@example.com',
                    userId: 'random-id'
                }
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        jwt: async({user,token}:any)=>{
            if(user){
                token.uid = user.id
            }
            return token;
        },
        session: async({session,token,user}:any)=>{
            if(session.user){
                session.user.id = token.uid;
            }
            return session;
        }

    },
    pages:{
        signIn:'/signin'
    }
}