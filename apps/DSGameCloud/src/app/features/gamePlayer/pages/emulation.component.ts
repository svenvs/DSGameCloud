import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { SecurityContext } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";

import { AsyncPipe } from "@angular/common";

@Component({
  selector: "DS-emulation",
  templateUrl: "./emulation.component.html",
  imports: [
    // RouterLink,
    // AsyncPipe,
    // RouterLinkActive,
    RouterOutlet,
  ],
  standalone: true,
})
export class emulationComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  public gameName ='';
  public gameEmulator = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.gameName = this.route.snapshot.params["gameName"];
    this.gameEmulator = this.route.snapshot.params["gameEmulator"];
    console.log(this.gameName);
    let emulatorWindow = (<HTMLIFrameElement>document.querySelector('#emulatorIframe')).contentWindow;
    emulatorWindow?.addEventListener('load', ()=>{
      emulatorWindow?.postMessage({gameName: this.gameName, gameEmulator: this.gameEmulator}, '*' );
    })
  }

}