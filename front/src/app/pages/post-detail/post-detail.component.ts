import {Component, OnInit} from '@angular/core';
import {PostService} from "../../core/services/post.service";
import {Post} from "../../core/interfaces/post";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

    post$!:Observable<Post>;
    id!: string | null;
    constructor(private postService: PostService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
        if (this.id !== null ) {
            this.post$ = this.postService.getPostById(this.id);
        }
    }

}
