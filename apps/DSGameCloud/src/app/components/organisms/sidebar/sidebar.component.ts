import { Component } from "@angular/core";
import { ConsoleItemComponent } from "../../molecules/consoleItem/consoleItem.component";

@Component({
    selector: 'DSCG-Sidebar',
    standalone: true,
    templateUrl: 'sidebar.html',
    imports: [ConsoleItemComponent]
})

export class SidebarComponent{
    selectedGameSystem='';
    availableGameSytems=[{name: 'N64'}, {name: 'SNES'}, {name:'PSP'}]

    selectSystem(name: string){
        this.selectedGameSystem = name;
    }
}