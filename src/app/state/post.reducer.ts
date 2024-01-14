import { createReducer, on } from '@ngrx/store';
import * as postsActions from './post.action';
import { Post } from './post.model';

export interface State {
    // Define your state properties here
    posts: Post[];
  }
  
export const initialState: State = {
    posts: [],
  };

  export const postReducer = createReducer(
    initialState,
    on(postsActions.loadPostsSuccess, (state, { posts }) => ({ ...state, posts })),
  );
