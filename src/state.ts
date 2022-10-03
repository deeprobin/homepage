import type { AstroGlobal } from "astro";
import { getLanguage, getLanguageRespectingPath, getLanguages } from "./localization";
import type { Language } from "./localization/language";

export class State {
    private constructor(
        public readonly astro: Readonly<AstroGlobal>,
        public language: Language | undefined,
        public acceptLanguage: Language | undefined,
        public allLanguages: Language[]) {
    }

    static async createState(astro: Readonly<AstroGlobal>): Promise<State> {
        let language = await getLanguageRespectingPath(astro.params);
        let acceptLanguage = await getLanguage(astro.request);
        let allLanguages = await getLanguages();
        return new State(astro, language, acceptLanguage, allLanguages);
    }
}