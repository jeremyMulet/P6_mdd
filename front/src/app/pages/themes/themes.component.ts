import {Component} from '@angular/core';
import {Topic} from "../../core/interfaces/topic";
import {TopicService} from "../../core/services/topic.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {

    topics$: Observable<Topic[]> = this.topicService.getAllTopics();
    constructor(private topicService: TopicService) {
    }

}
