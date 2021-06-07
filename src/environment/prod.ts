export = {
    stage: process.env.ENVIRONMENT,
    port:8082,
    domain:"",
    db:{
        name: '',
        user:'',
        pw: '',
        uri: (user: string, pw :string, name :string) => {
            return `mongodb+srv://${user}:${pw}@mr-ds-20-ckbes.gcp.mongodb.net/${name}?retryWrites=true&w=majority`
        }
    },
    
}
