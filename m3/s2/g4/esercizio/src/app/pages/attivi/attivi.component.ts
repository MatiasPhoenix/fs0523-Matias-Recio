import { Component } from '@angular/core';
import { IPosts } from '../../Models/iposts';
import { PagePostsService } from '../../page-posts.service';

@Component({
  selector: 'app-attivi',
  templateUrl: './attivi.component.html',
  styleUrl: './attivi.component.scss'
})
export class AttiviComponent {

  posts: IPosts[] = [];

  constructor(public postSvc:PagePostsService){}

  ngOnInit(){
    this.posts = this.postSvc.getActivePost();
  }
  toggleStatus(post:IPosts){
    this.postSvc.togglePost(post)
  }
}
