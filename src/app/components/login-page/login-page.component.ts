import { Component, OnInit, HostListener } from '@angular/core';
import { environment } from '../../../environments/environment';

@HostListener('window:resize', ['$event'])
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginURL = `${environment.serverUrl}auth`;
  innerWidth: number = window.innerWidth;

  constructor() {

   }

  ngOnInit() {

  }

  onResize(event) {
    this.innerWidth =  event.target.innerWidth;
  }

}
