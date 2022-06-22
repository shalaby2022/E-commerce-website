import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  sendInfo(data:any) {
    console.log(data.value)
  }
}
