import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { BstLocalBalancingComponent } from './components/bst-local-balancing/bst-local-balancing.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

const routes: Routes = [
  { path: 'start', component: MainNavComponent },
  { path: 'bst-local-balancing', component: BstLocalBalancingComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: '**', redirectTo: 'start', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production })
  ],
  exports: [ RouterModule ],
  declarations: []
})



export class AppRoutingModule { }
