import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth-service.service";
import {Router} from "@angular/router";
import {LoginRequest} from "../../payload/requests/loginRequest.interface";
import {SessionInformation} from "../../core/models/sessionInformation.model";
import {SessionService} from "../../core/services/session.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    onError = false;
    loginForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private sessionService: SessionService
        ) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group( {
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        })
    }

    onClickBackBtn() {
        history.back();
    }

    onSubmit() {
        const loginRequest = this.loginForm.value as LoginRequest;
        this.authService.login(loginRequest).subscribe({
            next: (response: SessionInformation) => {
                this.sessionService.logIn(response);
                this.router.navigate(['/home']);
            },
            error: _ => this.onError = true
        });
    }

}
