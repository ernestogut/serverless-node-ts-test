import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { v4 } from 'uuid';
import { DynamoDB } from 'aws-sdk';
import { type User } from '../../interfaces/user'

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    try {
        if (!event.body) return {
            statusCode: 400,
            body: JSON.stringify({ error: `Error al realizar la solicitud a la API: ${event.body}` }),
        }
        const dynamodb: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();
        const { first_name, email, last_name, dob, password } = JSON.parse(event.body);
        const createdAt: string = new Date().toISOString();
        const id: string = v4();

        const newUser: User = {
            id,
            first_name,
            email,
            last_name,
            dob,
            password,
            createdAt,
        }


        await dynamodb.put({
            TableName: 'Users',
            Item: newUser,
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(newUser),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Error al realizar la solicitud a la API: ${error}` }),
        };
    }
};