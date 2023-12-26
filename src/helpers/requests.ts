import { translateText } from "./translate";
import http from 'http';
export async function translateObjectKeys(model: any, targetLanguage: string): Promise<any> {
    const translationPromises = Object.keys(model).map(async (key) => {
        const translation = await translateText(key, targetLanguage);
        const translatedKey = translation.TranslatedText;
        return [translatedKey, model[key]];
    });
    const translatedArray = await Promise.all(translationPromises);
    const translatedObject = Object.fromEntries(translatedArray);
    return translatedObject;
}

export async function translateArrayObjectKeys(array: any[], targetLanguage: string): Promise<any[]> {
    const translationPromises = array.map(async (item) => {
        const translatedObject = await translateObjectKeys(item, targetLanguage);
        return translatedObject;
    });
    const translatedArray = await Promise.all(translationPromises);
    return translatedArray;
}


export const makeRequest = (url: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const req = http.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(data);
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
};

