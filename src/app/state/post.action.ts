import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const createPost = createAction(
  '[Posts] Create Post',
  props<{ post: Post }>()
);

export const updatePost = createAction(
  '[Posts] Update Post',
  props<{ post: Post }>()
);

export const deletePost = createAction(
  '[Posts] Delete Post',
  props<{ postId: number }>()
);
