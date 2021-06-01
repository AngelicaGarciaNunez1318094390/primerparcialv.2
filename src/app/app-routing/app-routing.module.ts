import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConocemeComponent } from '../pages/conoceme/conoceme.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { ErrorComponent } from '../pages/error/error.component';
import { MisdatosComponent } from '../pages/misdatos/misdatos.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'conoceme', component: ConocemeComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: 'misdatos', component: MisdatosComponent
  },
  {
    path: '', redirectTo: 'misdatos', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'error'
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
