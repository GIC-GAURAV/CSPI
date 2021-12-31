import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout.component';
//   { text: "Inbox", icon: "k-i-inbox", selected: true},
  //   // { separator: true },
  //   { text: "Favourites", icon: "k-i-star-outline" },
  //   { text: "Notifications", icon: "k-i-bell" },
  //   { text: "Calendar", icon: "k-i-calendar" },
  //   { separator: true },
  //   { text: "Attachments", icon: "k-i-hyperlink-email" },
  //   { text: "Setting", icon: "k-i-cog" },
const routes = [
  { path: '', 
    component: FullLayoutComponent,
    children : [
      { path: '',
      loadChildren: () => import('../../Dashboard/cases-reports/cases-reports.module')
      .then(m => m.CasesReportsModule),
      text : "Case Report",
      icon : "k-i-star-outline",
      },
      { path: 'reports', 
        loadChildren: () => import('../../Dashboard/reports/reports.module')
        .then(m => m.ReportsModule),
        text : "Reports",
        icon : "k-i-bell"
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
