import { Component } from '@angular/core';
import { PostServiceService } from '../../post-service.service';
import { IPosts } from '../../Models/posts';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {

  post:IPosts[] = [];

  constructor(private postSvc:PostServiceService){}

  ngOnInit(){
    this.post = this.postSvc.posts
  }
}
