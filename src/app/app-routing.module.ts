import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResponseGroupEditorComponent } from './response-group-editor/response-group-editor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { EmergencySelectComponent } from './dashboard/emergencies/emergency-select/emergency-select.component';
import { EmergencyDetailComponent } from './dashboard/emergencies/emergency-detail/emergency-detail.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: '', component: EmergencySelectComponent},
            {path: 'respArea/:respAreaId/emergency/:emergencyId', component: EmergencyDetailComponent}
            //{path: ':id/edit', component: ResponseGroupEditComponent},
        ]
    },
    {
        path: 'responseGrpEdit',
        component: ResponseGroupEditorComponent
    },
    {
        path: 'location',
        component: LocationComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
