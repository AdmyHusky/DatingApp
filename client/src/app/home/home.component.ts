  import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // users: any;

  //parent to child
  //private http: HttpClient
  constructor() { }

  ngOnInit(): void {
    // parent to child
    // this.getUser();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  // parent to child
  // getUser() {
  //   this.http.get('https://localhost:5001/api/users').subscribe(users => {
  //     this.users = users;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

}
