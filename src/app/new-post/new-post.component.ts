import { Component, OnInit } from '@angular/core';
import { DbCommunicationService } from '../db-communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent  {


  title:String;
  content:String;
  date: String;

  constructor(private dbc: DbCommunicationService,
    private router: Router) { }

  onSubmit() {
    this.dbc.addPost(this.title, this.content).subscribe();
    this.router.navigate(['/posts']);
  }

 

}
