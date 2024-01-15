import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostViewComponent } from './single-post-view/single-post-view.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { CommentsComponent } from './comments/comments.component';
import { DataService } from './data.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postReducer } from './state/post.reducer';
import { PostsEffects } from './state/post.effects';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    SinglePostViewComponent,
    TextEditorComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ posts: postReducer }),
    EffectsModule.forRoot([PostsEffects]), StoreModule.forRoot({}, {}),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
