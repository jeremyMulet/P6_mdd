import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../core/services/session.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../payload/requests/loginRequest.interface";
import {SessionInformation} from "../../core/models/sessionInformation.model";

@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

    profilForm!: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private sessionService: SessionService) {
    }

    ngOnInit(): void {
        this.profilForm = this.fb.group( {
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        })
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
