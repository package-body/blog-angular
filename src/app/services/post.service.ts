import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    // tslint:disable-next-line: max-line-length
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar enim eu risus sollicitudin, vitae lacinia orci convallis. Nam vitae ante ac metus vehicula condimentum. Maecenas sed varius lectus. Fusce ipsum enim, tincidunt ut mattis nec, congue eget justo.'),
    // tslint:disable-next-line: max-line-length
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar enim eu risus sollicitudin, vitae lacinia orci convallis. Nam vitae ante ac metus vehicula condimentum. Maecenas sed varius lectus. Fusce ipsum enim, tincidunt ut mattis nec, congue eget justo.'),
    // tslint:disable-next-line: max-line-length
    new Post('Mon troisième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar enim eu risus sollicitudin, vitae lacinia orci convallis. Nam vitae ante ac metus vehicula condimentum. Maecenas sed varius lectus. Fusce ipsum enim, tincidunt ut mattis nec, congue eget justo.')
  ];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.emitPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.findIndexPost(post);
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  loveIt(post: Post) {
    const postIndexToRemove = this.findIndexPost(post);
    this.posts[postIndexToRemove].loveIts++;
    this.emitPosts();
  }

  dontLoveIt(post: Post) {
    const postIndexToRemove = this.findIndexPost(post);
    this.posts[postIndexToRemove].loveIts--;
    this.emitPosts();
  }

  private findIndexPost(post: Post): number {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    return postIndexToRemove;
  }
}
