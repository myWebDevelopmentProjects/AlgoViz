import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { IndexComponent } from './components/index/index.component';
import { AlgoVizPageComponent } from './components/algo-viz-page/algo-viz-page.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'algo-viz-page/:type', component: AlgoVizPageComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: '**', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production, useHash: true })
  ],
  exports: [ RouterModule ],
  declarations: []
})



export class AppRoutingModule { }
