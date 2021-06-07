export interface IEnv {
  stage?: string;
  port: number;
  db: MongoDBCfg;
  S3Creds?: S3Creds;
  adminCreds?: AdminCreds;
  stripe?: StripeCreds;
  domain: string;
  apiPath: string;
  staticPath: string;
}
interface StripeCreds {
  sk: string;
  webhooks: [{ [hook: string]: string }];
}
interface MongoDBCfg {
  name: string;
  user: string;
  pw: string;
  account: string;
  uri: (user: string, pw: string, name: string, account: string) => string;
}
interface S3Creds {
  s3root: string;
  bucket: string;
  key: string;
  secret: string;
}
interface AdminCreds {
  id: string;
  password: string;
  email: string;
  secret: string;
  token: () => string;
}
