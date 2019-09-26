import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt(post: Post) {
    this.postService.loveIt(post);
  }

  onDontLoveIt(post: Post) {
    this.postService.dontLoveIt(post);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }
}
