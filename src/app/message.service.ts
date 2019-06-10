import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messgae: string[] = [];

  add(messgae: string){
    this.messgae.push(messgae);
  }

  clear(){
    this.messgae = [];
  }

  constructor() { }
}
