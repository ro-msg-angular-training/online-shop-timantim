import { Component, OnInit } from '@angular/core';
import { Credentials } from '../_models/credentials.model';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private error : string;

  constructor(private router : Router,
    private authenticationService : AuthenticationService) { }

  ngOnInit() {

  }

  login(credentials : Credentials) {
    this.authenticationService.login(credentials)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigateByUrl('products');
        },
        error => {
            this.error = error.message;
        });
  }

}
