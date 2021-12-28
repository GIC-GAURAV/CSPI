import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesReportsRoutingModule } from './cases-reports-routing.module';
import { CasesReportsComponent } from './cases-reports.component';
import {CardModule, AvatarModule} from '@progress/kendo-angular-layout'

@NgModule({
  declarations: [
    CasesReportsComponent
  ],
  imports: [
    CommonModule,
    CasesReportsRoutingModule,
    CardModule,
    AvatarModule
  ]
})
export class CasesReportsModule { }
