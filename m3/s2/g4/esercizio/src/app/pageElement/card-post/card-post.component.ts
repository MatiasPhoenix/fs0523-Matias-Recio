import { Component, Input } from '@angular/core';
import { IPosts } from '../../Models/iposts';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.scss'
})
export class CardPostComponent {

  @Input() posts!:IPosts;
}
