import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout.component';

const routes: Routes = [
  { path: '', 
  component: FullLayoutComponent,
  children : [
    { path: '', loadChildren: () => import('../../Dashboard/cases-reports/cases-reports.module').then(m => m.CasesReportsModule) }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
