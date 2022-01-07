import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesReportsRoutingModule } from './cases-reports-routing.module';
import { CasesReportsComponent } from './cases-reports.component';
import {CardModule, AvatarModule} from '@progress/kendo-angular-layout'
import {ScrollViewModule} from '@progress/kendo-angular-scrollview';
import { ReportDetailComponent } from './report-detail/report-detail.component'
import {DropDownListModule} from '@progress/kendo-angular-dropdowns'
import {TreeViewModule} from '@progress/kendo-angular-treeview'
import {GaugesModule} from '@progress/kendo-angular-gauges'
import {TooltipModule} from '@progress/kendo-angular-tooltip'
import {IconsModule} from '@progress/kendo-angular-icons'
import { DialogModule } from "@progress/kendo-angular-dialog";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { FusionChartsModule } from 'angular-fusioncharts';
import { GridModule, ExcelModule  } from "@progress/kendo-angular-grid";
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';

// Load Widgets
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

// Load FusionTheme Theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);
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
    TreeViewModule,
    GaugesModule,
    TooltipModule,
    IconsModule,
    FusionChartsModule,
    DialogModule,
    ButtonsModule,
    GridModule,
    ExcelModule
  ]
})
export class CasesReportsModule { }
