import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth-service.service";
import {RegisterRequest} from "../../payload/requests/registerRequest.interface";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    onError = false;
    registerForm!: FormGroup;
    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required, Validators.min(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    onSubmit() {
        if (this.registerForm.valid) {
            console.log("valid")
            const registerData = this.registerForm.value as RegisterRequest;
            this.authService.register(registerData).subscribe({
                next: (_: void) => this.router.navigate(['/login']),
                error: _ => this.onError = true,
            });
        } else {
            console.log("not valid")
        }
    }
    onClickBackBtn() {
        history.back();
    }
}
