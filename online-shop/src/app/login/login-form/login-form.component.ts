import { Component, OnInit, Input } from '@angular/core';
import { Credentials } from 'src/app/_models/credentials.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() login : Function;
  @Input() error : string;
  credentials : Credentials = new Credentials();

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    this.login(this.credentials);
  }

}
