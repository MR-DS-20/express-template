export interface IEnv {
  stage?: string;
  port: number;
  db: IMongoDBCfg;
  S3Creds?: IS3Creds;
  adminCreds?: IAdminCreds;
  stripe?: IStripeCreds;
  domain: string;
  apiPath: string;
  staticPath: string;
  azureStorage?:IAzureStorage
}

export interface IStripeCreds {
  sk: string;
  webhooks: [{ [hook: string]: string }];
}

export interface IMongoDBCfg {
  name: string;
  user: string;
  pw: string;
  account: string;
  uri: (user: string, pw: string, name: string, account: string) => string;
}

export interface IS3Creds {
  s3root: string;
  bucket: string;
  key: string;
  secret: string;
}

export interface IAzureStorage {
STORAGE_ACCOUNT_NAME: string ;
STORAGE_ACCOUNT_ACCESS_KEY: string;

}

export interface IAdminCreds {
  id: string;
  password: string;
  email: string;
  secret: string;
  token: () => string;
}
