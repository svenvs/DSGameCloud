import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";

import { AsyncPipe } from "@angular/common";
import { GameListingComponent } from "../../../components/organisms/gameListing/gameListing.component";

@Component({
  selector: "DS-game-browser",
  templateUrl: "./gameBrowser.component.html",
  imports: [
    // RouterLink,
    // AsyncPipe,
    // RouterLinkActive,
    RouterOutlet,
    GameListingComponent,
  ],
  standalone: true,
})
export class gameBrowserComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    console.log('init')
  }

}