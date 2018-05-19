import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard.component';
import { DataTableModule } from 'primeng/datatable';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { EmergenciesService } from './emergencies/emergencies.service';
import { EmergencyComponent } from './emergencies/emergency/emergency.component';
import { EmergencyDetailComponent } from './emergencies/emergency-detail/emergency-detail.component';
import { EmergencySelectComponent } from './emergencies/emergency-select/emergency-select.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    EmergenciesComponent,
    EmergencyComponent,
    EmergencyDetailComponent,
    EmergencySelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    DashboardRoutingModule
  ],
  exports: [],
  providers: [EmergenciesService]
})
export class DashboardModule { }
