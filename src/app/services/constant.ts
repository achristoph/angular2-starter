import {Injectable} from '@angular/core';

/**
 * This service stores all constants based on environment
 */
@Injectable()
export class Constant {

  public data: any;

  constructor() {
    this.data = {};
  }
}
