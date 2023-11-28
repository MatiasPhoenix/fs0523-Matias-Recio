import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  service:IService[] = [
    {
      "id":1,
      "body": "bla bla bla bla bla bla bla bla bla",
      "title": "TITOLONE",
      "active": true
    },
    {
      "id":2,
      "body": "bla bla bla bla bla bla bla bla bla",
      "title": "TITOLONE",
      "active": true
    },
    {
      "id":3,
      "body": "bla bla bla bla bla bla bla bla bla",
      "title": "TITOLONE",
      "active": true
    },
    {
      "id":4,
      "body": "bla bla bla bla bla bla bla bla bla",
      "title": "TITOLONE",
      "active": true
    },
    {
      "id":5,
      "body": "bla bla bla bla bla bla bla bla bla",
      "title": "TITOLONE",
      "active": false
    },
    {
      "id":6,
      "body": "bla bla bla bla bla bla bla bla bla",
      "title": "TITOLONE",
      "active": false
    },

  ];

  getActivePost(){
    return this.service.filter(p => p.active)
  }

  getInactivePost(){
    return this.service.filter(p => !p.active)
  }
}
