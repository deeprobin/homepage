import { Language } from "./language";
import type { Params } from "astro";

export async function getLanguages(): Promise<Language[]> {
    return [
        new Language("en", (await import("./i18n/en.json")).default),
        new Language("de", (await import("./i18n/de.json")).default)
    ]
}

async function getFallbackLanguage(): Promise<Language> {
    return (await getLanguages())[0];
}

export async function getLanguage(request: Request): Promise<Language | undefined> {
    console.log(JSON.stringify(request.headers.get("Accept-Language")));
    if (request.headers.has("Accept-Language")) {
        for (let language of request.headers.get("Accept-Language")!.split(',')) {
            // ' en-US' -> 'en-US'
            // ' en-US;q=0.8' -> 'en-US;q=0.8'
            // ' en;q=0.8' -> 'en;q=0.8'
            language = language.trim();

            // 'en-US' -> 'en-US'
            // 'en-US;q=0.8' -> 'en-US'
            // 'en;q=0.8' -> 'en'
            let seperatorIndex = language.indexOf(';');
            if (seperatorIndex > -1) {
                language = language.substring(0, seperatorIndex);
            }

            // 'en-US' -> 'en'
            seperatorIndex = language.indexOf('-');
            if (seperatorIndex > -1) {
                language = language.substring(0, seperatorIndex);
            }

            let lang = (await getLanguages()).filter(l => l.identifier == language);
            if (lang.length > 0) {
                return lang[0];
            }
        }
    }
    return undefined;
}

export async function getLanguageRespectingPath(params: Params): Promise<Language | undefined> {
    let languageIdentifier = params.language;
    if (languageIdentifier == undefined) {
        return await getFallbackLanguage();
    }

    if (typeof (languageIdentifier) != "string") {
        // This should never happen, because language is a required route segment
        throw new Error("Language is not a string");
    }

    let langResult = (await getLanguages()).filter(l => l.identifier == languageIdentifier);
    if (langResult.length > 0) {
        return langResult[0];
    }
    return undefined;
}