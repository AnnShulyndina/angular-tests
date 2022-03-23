import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondDependancyService {

  constructor() { }

  start(): void {
    console.log('it is a real second dependency')
  }
}
