import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ConocemeComponent } from './pages/conoceme/conoceme.component';
import { MisdatosComponent } from './pages/misdatos/misdatos.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ConocemeComponent,
    MisdatosComponent,
    ErrorComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
