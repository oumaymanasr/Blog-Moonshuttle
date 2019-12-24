import { Injectable } from '@angular/core';
import { Post } from './post';
import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':  'application/json',
    'Accept':  'application/json',
    'Access-Control-Allow-Origin': 'https://blog-test-moonshuttle.firebaseio.com'
  })
};

const blog_test_url = 'https://blog-test-moonshuttle.firebaseio.com/rest/posts';

@Injectable({
  providedIn: 'root'
})



export class DbCommunicationService {


  constructor(private http: HttpClient) { }

  public addPost(title:String, content:String) {
    let post: Post = {
      title: title,
      content: content,
      date: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      likep: 0
    };
    return this.http.post(blog_test_url+'.json', post, httpOptions)
   ;
  }

  public getPosts() {
    return this.http
    .get<Object>(blog_test_url+'.json',httpOptions);
  }

  
  public deletePost(key:String) {
    return this.http
    .put(blog_test_url+'/'+key+'.json', httpOptions);
  }


  public setLikes(key:String, numLikes:number) {
    return this.http
    .put(blog_test_url+'/'+key+'/likep.json', numLikes, httpOptions);
  }






}
