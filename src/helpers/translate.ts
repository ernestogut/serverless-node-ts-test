import { Translate, config } from 'aws-sdk';
const translate = new Translate();
config.update({ region: 'us-east-1' });
export function translateText(text: string, targetLanguage: string) {
    const params = {
        SourceLanguageCode: 'en',
        TargetLanguageCode: targetLanguage,
        Text: text,
    };

    return translate.translateText(params).promise();
}