import { Injectable } from '@angular/core';
import {SecondDependancyService} from "./second-dependancy.service";

@Injectable({
  providedIn: 'root'
})
export class FirstDependencyService {

  constructor(private sd:SecondDependancyService) { }

  start(): void {
    console.log('first dep')
  }
  startSecond(): void {
    this.sd.start()
  }
}
