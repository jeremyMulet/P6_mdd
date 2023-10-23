import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterRequest} from "../../payload/requests/registerRequest.interface";
import {LoginRequest} from "../../payload/requests/loginRequest.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:8080/api/auth';

    constructor(private http: HttpClient) { }

    register(registerRequest: RegisterRequest): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, registerRequest);
    }

    // public login(loginRequest: LoginRequest): Observable<SessionInformation> {
    //     return this.httpClient.post<SessionInformation>(`${this.pathService}/login`, loginRequest);
    // }

}
