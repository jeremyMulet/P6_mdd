import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../interfaces/post";
import * as http from "http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private pathService = 'api/posts';
    constructor(private http: HttpClient) {
    }

    getPostById(id:string): Observable<Post> {
        return this.http.get<Post>(`${this.pathService}/${id}`)
    }
}
