import { IEnv } from "./iEnv";

export const ENV:IEnv = {
    stage: process.env.ENVIRONMENT,
    port:8082,
    domain:'',
    apiPath: '',
    staticPath: '',
    db:{
        name: '',
        user:'',
        pw: '',
        account: '@mr-ds-20-ckbes',
        uri: (user: string, pw :string, name :string, account: string) => {
            return `mongodb+srv://${user}:${pw}${account}.gcp.mongodb.net/${name}?retryWrites=true&w=majority`
        }
    },
    
}


