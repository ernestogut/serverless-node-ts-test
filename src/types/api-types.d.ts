declare module 'aws-lambda' {
    interface APIGatewayEvent {
        statusCode: number;
        body: string;
    }
    interface APIGatewayProxyResult {
        statusCode: number;
        body: string;
    }
}