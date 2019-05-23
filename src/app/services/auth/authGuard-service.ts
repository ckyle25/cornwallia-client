import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    isLoggedIn: any;

    constructor(private auth: AuthService,
                private router: Router) { }

    canActivate() {
      if (this.auth.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['login']);
        alert('Please Login');
        return false;
    }
    }
}


