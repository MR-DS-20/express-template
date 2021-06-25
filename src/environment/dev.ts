import { IEnv } from "../interfaces/IEnv";

export const ENV:IEnv = {
    stage: process.env.ENVIRONMENT,
    port:8082,
    domain:'',
    apiPath: '',
    staticPath: '',
    db:{
        name: 'COLLECTION_NAME',
        user:'',
        pw: '',
        account: '@mongo-account',
        uri: (user: string, pw :string, name :string, account: string) => {
            return `mongodb+srv://${user}:${pw}${account}.gcp.mongodb.net/${name}?retryWrites=true&w=majority`
        }
    },
    
}


