import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../core/services/session.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../payload/requests/loginRequest.interface";
import {SessionInformation} from "../../core/interfaces/sessionInformation";
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/interfaces/user";
import {AuthService} from "../../core/services/auth-service.service";

@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

    profilForm: FormGroup = this.fb.group( {
        username: ["", [Validators.required,Validators.min(3)]],
        email: ["", [Validators.required, Validators.email]]
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private sessionService: SessionService,
        private authService: AuthService,
        private userService: UserService) {
    }

    ngOnInit(): void {
        this.authService.me().subscribe(
            (user: User) => {
                this.profilForm = this.fb.group( {
                    username: [user.userName, [Validators.required,Validators.min(3)]],
                    email: [user.email, [Validators.required, Validators.email]]
                })
            }
        )
    }

    public logout(): void {
        this.sessionService.logOut();
        this.router.navigate([''])
    }

    onSubmit() {
        // const loginRequest = this.profilForm.value as LoginRequest;
        // this.authService.login(loginRequest).subscribe({
        //     next: (response: SessionInformation) => {
        //         this.sessionService.logIn(response);
        //         this.router.navigate(['/articles']);
        //     },
        //     error: _ => this.onError = true
        // });
    }

}
