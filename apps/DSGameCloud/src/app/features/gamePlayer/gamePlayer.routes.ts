import { Routes } from "@angular/router";
import { emulationComponent } from "./pages/emulation.component";

const routes: Routes = [
    {
        path: "",
        children:[
            {
                path: "emulation",
                component: emulationComponent
            },
            {
                path: "emulation:gameName:gameEmulator",
                component: emulationComponent
            }
        ]
    },
];

export default routes;