import { Component } from '@angular/core';
import { HelloApiService } from '../../services/helloApi.service';
import { Observable } from 'rxjs';

type Hello = {
  message: string;
}


@Component({
    selector: 'hello-world',
    templateUrl: 'hello-world.html',
    standalone: true,
    // styleUrl: 'profile-photo.css', for lator
  })
  export class HelloWorld { 
    constructor(private helloApiService: HelloApiService){}
    message$!: Observable<Hello>;
    ngOnInit(): void {
      this.message$ = this.helloApiService.getHelloApi();
      console.log(this.message$);
    }

  }