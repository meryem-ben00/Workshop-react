import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: 'us-east-1_O8gA5ZaTv',
  ClientId: '1n1jgrn82911jh6131beunqjdi'
}
export default new CognitoUserPool(poolData)
