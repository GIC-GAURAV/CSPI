import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseReportsComponent } from './case-reports/case-reports.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {path: 'case', component: CaseReportsComponent},
  { path: '', component: ReportsComponent },


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
