import { Component, OnInit } from "@angular/core";
import { GamesApiService } from "../../../services/gamesApi.service";
import { ScraperApiService } from "../../../services/scraperApi.service";
import { GameAPIModel } from '@dsgame-cloud/shared'
@Component({
    selector: 'DSCG-GameListing',
    standalone: true,
    templateUrl: 'gameListing.html'
})
//https://medium.com/@sandeep15mca/rest-api-call-in-angular-application-289d907020ff
//https://medium.com/@aqeelabbas3972/services-in-angular-b125a5b5690e
export class GameListingComponent implements OnInit {
    games: GameAPIModel[]=[];
    constructor(
        private gamesService: GamesApiService,
        private scraperService: ScraperApiService
    ){}

    ngOnInit(): void {
        console.log('init stuff');

        this.scraperService.getScraper().subscribe(
            {next: (response) => {
                console.log(response);
                this.gamesService.getGames().subscribe(
                    {next: (response) => {
                        this.games = response;
                        console.log(this.games)
                    },
                    error:(error) => {
                        console.error(error);
                    }}
                );
            },
            error:(error) => {
                console.error(error);
            }}
        );
    }

}