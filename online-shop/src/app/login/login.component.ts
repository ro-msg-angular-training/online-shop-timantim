import { Component, OnInit } from '@angular/core';
import { Credentials } from '../core/models/credentials.model';
import { AuthenticationService } from '../core/services/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private error: string;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  login(credentials: Credentials) {
    this.authenticationService.login(credentials)
      .subscribe(
        data => {
          this.router.navigateByUrl('products');
        },
        error => {
          this.error = error.message;
        });
  }

}
