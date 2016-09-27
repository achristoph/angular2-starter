import { Injectable } from '@angular/core';
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

export interface IProject {
  title: string;
  description: string;
  tasks: any[];
}

export interface ITask {
  title: string;
  done: boolean;
}
