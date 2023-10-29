import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterRequest} from "../../payload/requests/registerRequest.interface";
import {LoginRequest} from "../../payload/requests/loginRequest.interface";
import {SessionInformation} from "../interfaces/sessionInformation";
import {User} from "../interfaces/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private pathService = 'api/auth';

    constructor(private http: HttpClient) {
    }

    public register(registerRequest: RegisterRequest): Observable<any> {
        return this.http.post(`${this.pathService}/register`, registerRequest);
    }

    public login(loginRequest: LoginRequest): Observable<SessionInformation> {
        return this.http.post<SessionInformation>(`${this.pathService}/login`, loginRequest);
    }

    public me(): Observable<User> {
        return this.http.get<User>(`${this.pathService}/me`);
    }

}
