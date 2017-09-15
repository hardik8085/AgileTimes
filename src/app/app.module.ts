import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuModule,PanelModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
   { path: "settings", component: SettingsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    PanelModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
