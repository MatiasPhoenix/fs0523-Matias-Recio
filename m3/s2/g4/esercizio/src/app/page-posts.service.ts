import { Injectable } from '@angular/core';
import { IPosts } from './Models/iposts';

@Injectable({
  providedIn: 'root'
})
export class PagePostsService {

  posts:IPosts[] = [
    {
      id: 0,
      body:"bla bla bla bla bla bla bla bla bla bla",
      title: "Super Titolo news0",
      active: true,
      type: "news"
    },
    {
      id: 1,
      body:"bla bla bla bla bla bla bla bla bla bla",
      title: "Super Titolo politic1",
      active: true,
      type: "politic"
    },
    {
      id: 2,
      body:"bla bla bla bla bla bla bla bla bla bla",
      title: "Super Titolo news2",
      active: false,
      type: "news"
    },
    {
      id: 3,
      body:"bla bla bla bla bla bla bla bla bla bla",
      title: "Super Titolo news3",
      active: true,
      type: "news"
    },
    {
      id: 4,
      body:"bla bla bla bla bla bla bla bla bla bla",
      title: "Super Titolo politic4",
      active: false,
      type: "politic"
    },
    {
      id: 5,
      body:"bla bla bla bla bla bla bla bla bla bla",
      title: "Super Titolo news5",
      active: true,
      type: "news"
    },
    {
      id: 6,
      body:"bla bla bla bla bla bla bla bla bla bla",
      title: "Super Titolo news6",
      active: true,
      type: "news"
    }
  ];

  constructor() { }



}
