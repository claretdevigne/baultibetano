import AWS from 'aws-sdk'
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from "../../credentials"

const params = {
  TableName: 'baultibetano-product-data',
}

class IConnectDB {
  connect () {
    return new AWS.DynamoDB.DocumentClient({
      region: 'us-east-2',
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
  })
}}

class Connect {
  constructor() {
    this._database = new IConnectDB().connect()
  }
}

export default Connect