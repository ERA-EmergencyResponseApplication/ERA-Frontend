import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EmergencyDetailComponent } from './emergencies/emergency-detail/emergency-detail.component';
import { EmergencySelectComponent } from './emergencies/emergency-select/emergency-select.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: '', component: EmergencySelectComponent},
            {path: 'respArea/:respAreaId/emergency/:emergencyId', component: EmergencyDetailComponent}
            // {path: ':id/edit', component: ResponseGroupEditComponent},
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class DashboardRoutingModule {

}
