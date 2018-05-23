import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResponseGroupEditorComponent } from './response-group-editor/response-group-editor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { EmergencySelectComponent } from './dashboard/emergencies/emergency-select/emergency-select.component';
import { EmergencyDetailComponent } from './dashboard/emergencies/emergency-detail/emergency-detail.component';
import { RegisterComponent } from './register/register.component';
import { ViewEmergencyComponent } from './view-emergency/view-emergency.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: EmergencySelectComponent},
            {path: 'respArea/:respAreaId/emergency/:emergencyId', component: EmergencyDetailComponent}
            // {path: ':id/edit', component: ResponseGroupEditComponent},
        ]
    },
    {
        path: 'events/:emergencyId',
        component: ViewEmergencyComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'location',
        component: LocationComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
