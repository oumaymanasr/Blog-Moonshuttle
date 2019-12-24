import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';
import { DbCommunicationService } from '../db-communication.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {

  @Input() post: Post; 
  @Output() deletePost = new EventEmitter<String>();

  constructor(private dbc: DbCommunicationService) { }

  public addLike() {
    this.post.likep++;
    this.dbc.setLikes((this.post as any).key, this.post.likep).subscribe();
  }

  public disLike() {
    this.post.likep--;
    this.dbc.setLikes((this.post as any).key, this.post.likep).subscribe();
  }

  public delete() {
    this.deletePost.emit((this.post as any).key);
  }

}
