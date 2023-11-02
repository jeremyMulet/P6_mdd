import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Topic} from "../interfaces/topic";

@Injectable({
    providedIn: 'root'
})
export class TopicService {

    private pathService = 'api/topic';

    constructor(private http: HttpClient) {
    }

    getAllTopics(): Observable<Topic[]> {
        return this.http.get<Topic[]>(`${this.pathService}`)
    }
}
