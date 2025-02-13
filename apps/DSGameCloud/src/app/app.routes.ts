import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "",
        loadChildren: () => import("./features/browseGames/browseGames.routes"),
    },
];
