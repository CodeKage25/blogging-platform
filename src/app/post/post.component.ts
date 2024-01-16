import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as postsActions from '../state/post.action';
import * as fromPosts from '../state/post.reducer';
import { Post } from '../state/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  selectedPost: Post | undefined;

  constructor(private store: Store<fromPosts.State>) {}

  ngOnInit(): void {
    this.store.dispatch(postsActions.loadPostsSuccess({ posts: this.posts }));
    this.store.select(fromPosts.getPosts).subscribe((posts) => (this.posts = posts));
  }

  createOrUpdatePost(post: Post): void {
    if (post.id === 0) {
      this.store.dispatch(postsActions.createPost({ post }));
    } else {
      this.store.dispatch(postsActions.updatePost({ post }));
    }
  }

  editPost(post: Post): void {
    this.selectedPost = post;
  }

  deletePost(postId: number): void {
    this.store.dispatch(postsActions.deletePost({ postId }));
  }
}