import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://dummyapi.io/data/api';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts`);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, postData);
  }

  updatePost(postId: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${postId}`, updatedData);
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${postId}`);
  }
}
