import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { fetchPeopleSwapi } from '../../services/people.service';
import { translateArrayObjectKeys } from '../../helpers/requests';
import { type Person } from '../../interfaces/person';
export const handler = async (_event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    try {
        const response = await fetchPeopleSwapi();
        const persons = response.results;
        const translatedPersons: Person[] = await translateArrayObjectKeys(persons, 'es');
        return {
            statusCode: 200,
            body: JSON.stringify(translatedPersons),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Error al realizar la solicitud a la API: ${error}` }),
        };
    }
};