import { Injectable } from '@angular/core';

@Injectable()
export class CloudService {
  a = [1, 2, 3, 4, 5];
  constructor() { }
  getData(): Array<Number> {
    return this.a;
  }
}
