import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { DataService } from '../data.service';
import * as postsActions from './post.action';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postsActions.loadPosts),
      mergeMap(() =>
        this.dataService.getPosts().pipe(
          map((posts) => postsActions.loadPostsSuccess({ posts }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
