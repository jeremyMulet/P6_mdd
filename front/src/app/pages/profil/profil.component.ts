import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../core/services/session.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/interfaces/user";
import {AuthService} from "../../core/services/auth-service.service";
import {ProfileUpdateRequest} from "../../payload/requests/profileUpdateRequest";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageResponse} from "../../payload/response/messageResponse";
import {Observable} from "rxjs";
import {Topic} from "../../core/interfaces/topic";

@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

    private user!:User;
    myTopics$: Observable<Topic[]> = this.userService.getSubscribedTopics(this.sessionService.sessionInformation!.id);

    profilForm: FormGroup = this.fb.group({
        username: ["", [Validators.required, Validators.min(3)]],
        email: ["", [Validators.required, Validators.email]]
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private matSnackBar: MatSnackBar,
        private sessionService: SessionService,
        private authService: AuthService,
        private userService: UserService) {
    }

    ngOnInit(): void {
        this.authService.me().subscribe(
            (user: User) => {
                this.user = user;
                this.profilForm = this.fb.group({
                    username: [user.userName, [Validators.required, Validators.min(3)]],
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
        if (this.user != undefined) {
            const request = this.profilForm.value as ProfileUpdateRequest;
            this.userService.updateProfile(request, this.user.id).subscribe(
                (message: MessageResponse) => {
                    this.matSnackBar.open(`${message.message}`, 'Close', {duration: 3000});
                },
                error => {this.matSnackBar.open('Problème lors de la mise à jour du profile', 'Close', {duration: 3000});}
            );
        } else this.matSnackBar.open('Problème lors de la mise à jour du profile', 'Close', {duration: 3000});
    }

}
