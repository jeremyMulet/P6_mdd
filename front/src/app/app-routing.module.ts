import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {ArticlesComponent} from "./pages/articles/articles.component";
import {ProfilComponent} from "./pages/profil/profil.component";
import {ThemesComponent} from "./pages/themes/themes.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'articles',
        component: ArticlesComponent
    },
    {
        path: 'themes',
        component: ThemesComponent
    },
    {
        path: 'profil',
        component: ProfilComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
