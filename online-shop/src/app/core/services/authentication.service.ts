import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Credentials } from '../models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private user: User;

    constructor(private http: HttpClient) {

    }

    public get currentUser(): User {
        return this.user;
    }

    login(credentials: Credentials) {
        let username: string = credentials.username;
        let password: string = credentials.password;
        return this.http.post<any>(`http://localhost:3000/login`, { username, password })
            .pipe(map(user => {
                if (user) {
                    this.user = user;
                }
                return user;
            }));
    }

    logout() {
        this.user = null;
    }

    public isAdmin() {
        return this.user.roles.includes("admin");
    }

    public isCustomer() {
        return this.user.roles.includes("customer");
    }

    public get isLogged() {
        return this.user != null;
    }
}
