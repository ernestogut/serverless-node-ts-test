import { makeRequest } from '../helpers/requests';
const BASE_URL = 'http://swapi.py4e.com/api';

export async function fetchPeopleSwapi(): Promise<any> {
    try {
        const apiUrl: string = `${BASE_URL}/people/`;
        const response = await makeRequest(apiUrl);
        const responseJson = JSON.parse(response);
        return responseJson;
    } catch (error) {
        throw new Error(`Error fetching people data: ${error.message}`);
    }
}

export async function fetchPersonSwapi(personId: number): Promise<any> {
    try {
        const apiUrl = `${BASE_URL}/people/${personId}/`;
        const response = await makeRequest(apiUrl);
        const responseJson = JSON.parse(response);
        return responseJson;
    } catch (error) {
        throw new Error(`Error fetching person data: ${error.message}`);
    }
}