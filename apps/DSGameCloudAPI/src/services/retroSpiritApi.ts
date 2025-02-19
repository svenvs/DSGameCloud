export interface rsGameResult{
    id: number;
    name: string;
    year: number;
    description: string;
    cover: string;
}


export class RetroSpirit{
    basePath = 'https://retro.gg/api/'

    constructor(
        private apiKey: string
    ){}

    async searchByGameName(query: string): Promise<rsGameResult[]>{
        const response = await fetch(`${this.basePath}search/games/${query}?key=${this.apiKey}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json.results;
    }
}