import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "",
        loadChildren: () => import("./features/browseGames/browseGames.routes"),
    },
    {
        path: "player",
        loadChildren: () => import("./features/gamePlayer/gamePlayer.routes"),
    },
];
