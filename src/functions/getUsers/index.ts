import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
export const handler = async (_event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    try {
        const dynamodb = new DynamoDB.DocumentClient();
        const response = await dynamodb.scan({
            TableName: 'Users',
        }).promise();
        const users = response.Items;
        return {
            statusCode: 200,
            body: JSON.stringify(users),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Error al realizar la solicitud a la API: ${error}` }),
        };
    }
};