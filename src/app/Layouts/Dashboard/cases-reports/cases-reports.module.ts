import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesReportsRoutingModule } from './cases-reports-routing.module';
import { CasesReportsComponent } from './cases-reports.component';
import {CardModule, AvatarModule} from '@progress/kendo-angular-layout'
import {ScrollViewModule} from '@progress/kendo-angular-scrollview';
import { ReportDetailComponent } from './report-detail/report-detail.component'
import {DropDownListModule} from '@progress/kendo-angular-dropdowns'
import {TreeViewModule} from '@progress/kendo-angular-treeview'

@NgModule({
  declarations: [
    CasesReportsComponent,
    ReportDetailComponent
  ],
  imports: [
    CommonModule,
    CasesReportsRoutingModule,
    CardModule,
    AvatarModule,
    ScrollViewModule,
    DropDownListModule,
    TreeViewModule
  ]
})
export class CasesReportsModule { }
