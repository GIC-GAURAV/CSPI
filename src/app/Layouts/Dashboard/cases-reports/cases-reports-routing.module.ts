import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesReportsComponent } from './cases-reports.component';

const routes: Routes = [{ path: '', component: CasesReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesReportsRoutingModule { }
