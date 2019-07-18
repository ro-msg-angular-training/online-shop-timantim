import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
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
        let username: string = credentials.username
        let password: string = credentials.password
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

    public get isAdmin() {
        return this.user.roles.includes("admin");
    }

    public get isCustomer() {
        return this.user.roles.includes("customer");
    }
}
