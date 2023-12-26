import { DocumentClient, awsSdkPromiseResponse } from '../__mocks__/aws-sdk/dynamodb';
import { handler } from '../src/functions/createUser';
import { v4 } from 'uuid';


jest.mock('aws-sdk', () => {
    return {
        DynamoDB: {
            DocumentClient: DocumentClient,
        },
    };
});

describe('Create user', () => {
    it('should create a user in dynamodb', async () => {
        // Configurar el resultado simulado que deseas para DynamoDB
        awsSdkPromiseResponse.mockResolvedValueOnce({});
        // Simular el evento que se enviaría a la función Lambda
        const id = v4();
        const input = {
            id,
            first_name: 'Test',
            email: 'ernestogutttt@gmail.com',
            last_name: 'Test',
            dob: '1990-01-01',
            password: '123456',
        } as any;
        // Configurar el resultado esperado de la función Lambda
        const expectedOutput = {
            statusCode: 200,
            body: {
                id: expect.any(String),
                first_name: expect.any(String),
                email: expect.any(String),
                last_name: expect.any(String),
                dob: expect.any(String),
                password: expect.any(String),
                createdAt: expect.any(String)
            },
        }

        // Llamar a la función Lambda
        const output = await handler({
            body: JSON.stringify(input),
        } as any);
        // Convertir el cuerpo de la respuesta a JSON
        output.body = JSON.parse(output.body);
        // Verificar el resultado
        expect(output.statusCode).toBe(200);
        expect(output).toMatchObject(expectedOutput);
    });

});