import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataTableModule } from 'primeng/datatable';
import { PanelModule } from 'primeng/panel';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ResponseGroupEditorComponent } from './response-group-editor/response-group-editor.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { PasswordModule } from 'primeng/password';
import { ResponseAreaComponent } from './response-area/response-area.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LoginComponent } from './login/login.component';
import { ResponderComponent } from './responder/responder.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { ResponseAreaService } from './services/response-area.service';
import { SignupComponent } from './signup/signup.component';
import { ValidationService } from './services/validation.service';
import { EmergencyService } from './services/emergency.service';
import { EmergencySelectComponent } from './dashboard/emergencies/emergency-select/emergency-select.component';
import { EmergencyDetailComponent } from './dashboard/emergencies/emergency-detail/emergency-detail.component';
import { EmergencyComponent } from './dashboard/emergencies/emergency/emergency.component';
import { EmergenciesComponent } from './dashboard/emergencies/emergencies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CardModule } from 'primeng/card';
import { UserService } from '../app/services/user.service';
import { ViewEmergencyComponent } from './view-emergency/view-emergency.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DataViewModule } from 'primeng/dataview';
import { EmergencyEventsComponent } from './dashboard/emergency-events/emergency-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResponseGroupEditorComponent,
    LocationComponent,
    ResponseAreaComponent,
    LoginComponent,
    ResponderComponent,
    SignupComponent,
    DashboardComponent,
    EmergenciesComponent,
    EmergencyComponent,
    EmergencyDetailComponent,
    EmergencySelectComponent,
    RegisterComponent,
    ViewEmergencyComponent,
    EmergencyEventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    DataTableModule,
    AppRoutingModule,
    DropdownModule,
    AutoCompleteModule,
    RadioButtonModule,
    SelectButtonModule,
    PanelModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I'
    }),
    NgbModule.forRoot(),
    CommonModule,
    DialogModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    PasswordModule,
    InputTextareaModule,
    MultiSelectModule,
    CardModule,
    ToolbarModule,
    DataViewModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    ResponseAreaService,
    EmergencyService,
    UserService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
