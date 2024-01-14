import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from '../data.service';
import * as postsActions from '../state/post.action';
import * as fromPosts from '../state/post.reducer';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'], 
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  filteredPosts: any[] = [];
  searchTerm: string = '';

  constructor(
    private dataService: DataService,
    private store: Store<fromPosts.State>) {}



  ngOnInit(): void {
    this.store.dispatch(postsActions.loadPosts());
    
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
      this.filteredPosts = [...this.posts]; // Initialize filteredPosts with all posts
    });
  }

  searchPosts(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredPosts = this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredPosts = [...this.posts]; // If search term is empty, show all posts
    }
  }
}
