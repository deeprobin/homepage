export class Language {
    #json: Record<string, string>;

    getByKey(key: string): string | undefined {
        return this.#json![key];
    }

    constructor(public identifier: string, json: Record<string, string>) {
        this.#json = json;
    }
}