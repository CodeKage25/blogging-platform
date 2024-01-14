// single-post-view.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-single-post-view',
  templateUrl: './single-post-view.component.html',
  styleUrls: ['./single-post-view.component.scss'],
})
export class SinglePostViewComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const postId = params['id'];

      if (postId) {
        this.dataService.getPostById(postId).subscribe((data) => {
          this.post = data;
        });
      }
    });
  }
}
