import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileUpdateRequest} from "../../payload/requests/profileUpdateRequest";
import {Observable} from "rxjs";
import {MessageResponse} from "../../payload/response/messageResponse";
import {Post} from "../interfaces/post";
import {Topic} from "../interfaces/topic";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private pathService = 'api/user';

    constructor(private http: HttpClient) {
    }

    public updateProfile(request: ProfileUpdateRequest, id: number): Observable<MessageResponse> {
        return this.http.put<MessageResponse>(`${this.pathService}/${id}`, request);
    }

    public getSubscribedPosts(id: number): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.pathService}/${id}/subscribed-posts`)
    }


    public getSubscribedTopics(id: number): Observable<Topic[]> {
        return this.http.get<Topic[]>(`${this.pathService}/${id}/subscribed-topics`)
    }
}
