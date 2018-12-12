import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListitemComponent } from './listitem/listitem.component';



const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'listview', component: ListitemComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
