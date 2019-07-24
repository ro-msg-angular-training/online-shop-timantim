import { Component} from '@angular/core';
import { Credentials } from '../core/models/credentials.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from '../store/app.states';
import { LogIn } from '../store/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials : Credentials = new Credentials();
  state$: Observable<any>;
  errorMessage: string | null;

  constructor(
    private store: Store<AppState>
  ) {
    this.state$ = this.store.select(selectAuthState);
  }

  ngOnInit() {
  };

  login(credentials : Credentials): void {
    this.store.dispatch(new LogIn(credentials));
  }

}
