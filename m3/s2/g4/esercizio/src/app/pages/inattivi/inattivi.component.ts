import { Component } from '@angular/core';
import { IPosts } from '../../Models/iposts';
import { PagePostsService } from '../../page-posts.service';

@Component({
  selector: 'app-inattivi',
  templateUrl: './inattivi.component.html',
  styleUrl: './inattivi.component.scss'
})
export class InattiviComponent {

  posts: IPosts[] = [];

  constructor(public postsSvc:PagePostsService){}

  ngOnInit(){
    this.posts = this.postsSvc.getInactivePost();
  }
}
