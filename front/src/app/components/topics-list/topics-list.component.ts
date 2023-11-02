import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../core/interfaces/topic";
import {SessionService} from "../../core/services/session.service";

@Component({
    selector: 'app-topics-list',
    templateUrl: './topics-list.component.html',
    styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent {

    @Input() topics!: Topic[];
    @Input() noButton?: boolean;
    @Input() subscribe?: boolean | undefined;

    constructor(private sessionService: SessionService) {
    }
    subscribeTopic(): void {

    }

    unsubscribeTopic(): void {

    }

}
