import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import {DropDownListModule} from '@progress/kendo-angular-dropdowns'
import {CardModule} from "@progress/kendo-angular-layout"
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
@NgModule({
  declarations: [
    ReportsComponent,
    CaseDetailComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    DropDownListModule,
    CardModule,
    CalendarModule
  ]
})
export class ReportsModule { }
