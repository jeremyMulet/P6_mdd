import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {SessionService} from "../core/services/session.service";

@Injectable({ providedIn: 'root' })
export class JwtInterceptor implements HttpInterceptor {
    constructor(private sessionService: SessionService) {}

    public intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log(this.sessionService.isLogged)
        console.log(this.sessionService.sessionInformation?.token)
        console.log(this.sessionService.sessionInformation?.id)
        if (this.sessionService.isLogged) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.sessionService.sessionInformation!.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
