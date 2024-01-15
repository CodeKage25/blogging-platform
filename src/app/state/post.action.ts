import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
);
