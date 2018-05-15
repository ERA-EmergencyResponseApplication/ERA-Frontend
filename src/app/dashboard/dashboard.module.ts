import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard.component';
import { DataTableModule } from 'primeng/datatable';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { EmergencyComponent } from './emergencies/emergency/emergency.component';
import { ResponseAreaService } from './ResponseArea.service';
import { EmergenciesService } from './emergencies/emergencies.service';

@NgModule({
  declarations: [
    DashboardComponent,
    EmergenciesComponent,
    EmergencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  exports: [],
  providers: [ResponseAreaService, EmergenciesService]
})
export class DashboardModule { }
