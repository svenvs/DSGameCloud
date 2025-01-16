import { Component, input } from "@angular/core";

@Component({
    selector: 'DSCG-ConsoleItem',
    standalone: true,
    templateUrl: 'consoleItem.html'
})

export class ConsoleItemComponent{
    //2 manieren voor input functie is later toegevoegd va 17
    //@Input({required: true}) consoleIcon!: string
    consoleImage = input<string>();
    consoleName = input.required<string>();
}