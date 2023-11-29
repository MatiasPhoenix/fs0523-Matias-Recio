import { Component } from '@angular/core';
import { IPosts } from '../../Models/posts';
import { PostServiceService } from '../../post-service.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {

  post:IPosts[] = [];

  constructor(private postSvc:PostServiceService){}

  ngOnInit(){
    this.post = this.postSvc.getInactivePosts()
  }

}
