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

export interface Project {
  title: string;
  description: string;
  tasks: any[];
}

export interface Task {
  title: string;
  done: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface AppState {
  counter: number;
  tasks: Task[];
  taskFilter: any;
}

export interface Reducer<T> {
  (state: T, action: Action): T;
}
