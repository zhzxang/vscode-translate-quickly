import * as http from 'http';

export default class HttpClient {
  constructor() {

  }

  private prepareRequest() {
  }

  public async request(url: string, onResult: any) {
    const request = http.request
    const req = request(url, res => {
      const chunks = []
      res.on('data', chunk => {
        chunks.push(chunk)
      })
      res.on('end', () => {
        const body = Buffer.concat(chunks)
        onResult(body.toString())
      })

    })

    req.on('error', (err) => {
      onResult(err)
    });

    req.end()
  }
}