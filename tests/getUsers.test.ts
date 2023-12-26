import { DocumentClient, awsSdkPromiseResponse } from '../__mocks__/aws-sdk/dynamodb';
import { handler } from '../src/functions/getUsers';


jest.mock('aws-sdk', () => {
    return {
        DynamoDB: {
            DocumentClient: DocumentClient,
        },
    };
});

describe('Get users', () => {
    it('should get users from DynamoDB', async () => {
        const mockDynamoDBResponse = {
            Items: [
                {
                    id: '123',
                    first_name: 'Ernesto',
                    email: 'ernestogutttt@gmail.com',
                    last_name: 'Gutierrez',
                    dob: '1990-01-01',
                    password: '123456',
                    createdAt: '2021-01-01T00:00:00.000Z',
                },
            ],
        };
        awsSdkPromiseResponse.mockResolvedValueOnce(mockDynamoDBResponse);
        const output = await handler({
            body: JSON.stringify({}),
        } as any);

        // Verificar el resultado
        const responseBody = JSON.parse(output.body);

        expect(output.statusCode).toBe(200);
        responseBody.forEach((user: any) => {
            expect(user.id).toBeDefined();
            expect(user.first_name).toBeDefined();
            expect(user.email).toBeDefined();
            expect(user.last_name).toBeDefined();
            expect(user.dob).toBeDefined();
            expect(user.password).toBeDefined();
            expect(user.createdAt).toBeDefined();
        });
    });
});