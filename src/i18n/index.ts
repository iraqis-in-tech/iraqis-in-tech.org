import ar from './ar.json'
import en from './en.json'

export const translate = (key: string, language: string) : string => {
    let langData: { [key: string]: string } = {}
    if (language == 'AR') {
        langData = ar
    } else {
        langData = en
    }
    return langData[key];
}