import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import {DropDownListModule, DropDownsModule} from '@progress/kendo-angular-dropdowns'
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import {CardModule, AvatarModule, LayoutModule} from '@progress/kendo-angular-layout'
import {ScrollViewModule} from '@progress/kendo-angular-scrollview';
import {TreeViewModule} from '@progress/kendo-angular-treeview'
// import {GaugesModule} from '@progress/kendo-angular-gauges'
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import {TooltipModule} from '@progress/kendo-angular-tooltip'
import {IconsModule} from '@progress/kendo-angular-icons'
import { FusionChartsModule } from 'angular-fusioncharts';
import { GridModule } from "@progress/kendo-angular-grid";
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load themes
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { CaseDetailChartComponent } from './case-detail-chart/case-detail-chart.component';
import { CasesComponent } from './cases/cases.component';
import { CaseReportsComponent } from './case-reports/case-reports.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme
)
@NgModule({
  declarations: [
    ReportsComponent,
    CaseDetailComponent,
    CaseDetailChartComponent,
    CasesComponent,
    CaseReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    DropDownListModule,
    DropDownsModule,
    CardModule,
    CalendarModule,
    FusionChartsModule,
    GridModule,
    AvatarModule,
    ScrollViewModule,
    IconsModule,
    InputsModule,
    TooltipModule,
    TreeViewModule,
    LayoutModule,
    FormsModule,
    ButtonsModule,
    DateRangePickerModule
  ]
})
export class ReportsModule { }
