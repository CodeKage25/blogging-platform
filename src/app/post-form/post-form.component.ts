import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../state/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  @Input() post?: Post;
  @Output() submitForm = new EventEmitter<Post>();

  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });

    if (this.post) {
      this.postForm.patchValue({
        title: this.post.title,
        content: this.post.content,
      });
    }
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const formData: Post = {
        id: this.post ? this.post.id : 0,
        title: this.postForm.value.title,
        content: this.postForm.value.content,
        created_at: this.post ? this.post.created_at : '',
        updated_at: this.post ? new Date().toISOString() : '',
      };

      this.submitForm.emit(formData);
      this.postForm.reset();
    }
  }
}
