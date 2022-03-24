import { Injectable } from '@angular/core';
import {FirstDependencyService} from "../first-dependency/first-dependency.service";

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  private firstDependencyService: FirstDependencyService;

  constructor(firstDependencyService: FirstDependencyService) {
    this.firstDependencyService = firstDependencyService;
  }
  getValue(index: number) {
    return this.firstDependencyService.returnValue(index)
  }
  getIndex(): number {
    return 2;
  }
}
