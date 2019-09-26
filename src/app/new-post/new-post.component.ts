import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title:    ['', Validators.required],
      content:  ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const post: Post = new Post(title, content);
    this.postService.createNewPost(post);
    this.router.navigate(['posts']);
  }
}
