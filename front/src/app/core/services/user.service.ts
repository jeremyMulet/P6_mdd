import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileUpdateRequest} from "../../payload/requests/profileUpdateRequest";
import {Observable} from "rxjs";
import {MessageResponse} from "../../payload/response/messageResponse";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private pathService = 'api/user';

    constructor(private http: HttpClient) {
    }

    updateProfile(request: ProfileUpdateRequest, id: number): Observable<MessageResponse> {
        return this.http.put<MessageResponse>(`${this.pathService}/${id}`, request);
    }
}
