import { createReducer, on } from '@ngrx/store';
import * as postsActions from './posts.actions';

export const initialState: any[] = [];

export const postsReducer = createReducer(
  initialState,
  on(postsActions.loadPosts, (state, { posts }) => [...posts])
);
