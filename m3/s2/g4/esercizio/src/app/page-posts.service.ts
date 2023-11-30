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
      title: "Super Titolo education2",
      active: false,
      type: "education"
    },
    {
      id: 3,
      body:"bla bla bla bla bla bla bla bla bla bla",
      title: "Super Titolo education3",
      active: true,
      type: "education"
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

  getActivePost(){
    return this.posts.filter(post => post.active );
  }
  getInactivePost(){
    return this.posts.filter(post => !post.active);
  }

  togglePost(posts:IPosts){
    let index = this.posts.findIndex(post => post.id == posts.id);
    posts.active = !posts.active;
    this.posts.splice(index, 1,posts);
  }


}
