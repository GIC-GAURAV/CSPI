import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullLayoutRoutingModule } from './full-layout-routing.module';
import { FullLayoutComponent } from './full-layout.component';
import { HeaderComponent } from '../../header/header.component'
import { IconsModule } from '@progress/kendo-angular-icons';
import { IntlModule } from '@progress/kendo-angular-intl';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import {IndicatorsModule} from '@progress/kendo-angular-indicators'
import {InputsModule} from '@progress/kendo-angular-inputs'

//import{RefundReportComponent} from '../Dashboard/refund-report/refund-report.component'
import { NavigationModule } from '@progress/kendo-angular-navigation';
@NgModule({
  declarations: [
    FullLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FullLayoutRoutingModule,
    IconsModule,
    IntlModule,
    ButtonsModule,
    LayoutModule,
    InputsModule,
    NavigationModule,
    IndicatorsModule,
  ]
})
export class FullLayoutModule { }
