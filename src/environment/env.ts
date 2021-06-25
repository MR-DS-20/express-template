import { IEnv } from "../interfaces/IEnv";
export { IEnv } from "../interfaces/IEnv";


export const env:()=> IEnv = () =>{
    if (process.env.ENVIRONMENT === 'dev'){
        let env = require('./dev')
        return env
    }
    if (process.env.ENVIRONMENT === 'production'){
       let env = require('./prod')
       return env
    }
}
