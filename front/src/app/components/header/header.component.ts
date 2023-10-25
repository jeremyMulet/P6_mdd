import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../core/services/session.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isLogged = false

    constructor(private sessionService: SessionService) {
    }

    ngOnInit(): void {
        this.isLogged = this.sessionService.isLogged
    }

}
