import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../core/interfaces/post";
import {UserService} from "../../core/services/user.service";
import {SessionService} from "../../core/services/session.service";

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    public posts$!: Observable<Post[]>
    constructor(
        private userService: UserService,
        private sessionService: SessionService
    ) {
    }

    ngOnInit(): void {
        if (this.sessionService.sessionInformation?.id !== undefined) {
            this.posts$ = this.userService.getSubscribedPosts(this.sessionService.sessionInformation.id)
            console.log(this.posts$)
        }
    }

}
