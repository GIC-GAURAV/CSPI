import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { AppConfig } from './Services/app-config.service';


function initConfig(config: AppConfig){
  return () => config.ensureInit();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IconsModule,
    NavigationModule
  ],
  providers: [
    AppConfig,
    {​​​ provide:APP_INITIALIZER, useFactory:initConfig, deps: [AppConfig], multi:true }​​​
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
