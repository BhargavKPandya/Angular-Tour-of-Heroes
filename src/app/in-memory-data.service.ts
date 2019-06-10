import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){

  const heroes = [
    { id: 11, name: 'Ravi' },
    { id: 12, name: 'Pael' },
    { id: 13, name: 'Pandya' },
    { id: 14, name: 'Ashok' },
    { id: 15, name: 'Testing' },
    { id: 16, name: 'Hosted' },
    { id: 17, name: 'Angular' },
    { id: 18, name: 'TypeScript' },
    { id: 19, name: 'SCSS' },
    { id: 20, name: 'Node.js' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
