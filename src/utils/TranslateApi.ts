interface QueryString {
  text?: any,
  appid: string,
  key: string,
  salt: string,
  sign?: string,
}

export class Translate {
  private _qs: QueryString
}