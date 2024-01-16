import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as postsActions from './post.action';
import { Post } from './post.model';

export interface State {
  posts: Post[];
}

export const initialState: State = {
  posts: [],
};

export const postReducer = createReducer(
  initialState,
  on(postsActions.loadPostsSuccess, (state, { posts }) => ({ ...state, posts })),
  on(postsActions.createPost, (state, { post }) => ({ ...state, posts: [...state.posts, post] })),
  on(postsActions.updatePost, (state, { post }) => ({
    ...state,
    posts: state.posts.map((p) => (p.id === post.id ? post : p)),
  })),
  on(postsActions.deletePost, (state, { postId }) => ({
    ...state,
    posts: state.posts.filter((p) => p.id !== postId),
  }))
);

export const getPostState = createFeatureSelector<State>('posts');

export const getPosts = createSelector(
  getPostState,
  (state: State) => state.posts
);
