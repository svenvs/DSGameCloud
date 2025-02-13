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
  public gameName!: SafeResourceUrl

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.gameName = this.sanitizer.bypassSecurityTrustResourceUrl(this.route.snapshot.params["gameName"]);
  }

}