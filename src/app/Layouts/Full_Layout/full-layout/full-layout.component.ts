import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DrawerComponent, DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css'],
  animations: [
    trigger('toggleNav', [
      state('collapsed, void', style({ transform: 'translateX(-100%)' })),
      state('expanded', style({ transform: 'translateX(0)' })),
      transition('collapsed <=> expanded', [animate(200), animate(200)]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FullLayoutComponent implements OnInit {
  public selected = "Inbox";

  constructor() { }
  public items: Array<DrawerItem> = [
    { text: "Inbox", icon: "k-i-inbox", selected: true },
    { separator: true },
    { text: "Favourites", icon: "k-i-star-outline" },
    { text: "Notifications", icon: "k-i-bell" },
    { text: "Calendar", icon: "k-i-calendar" },
    { separator: true },
    { text: "Attachments", icon: "k-i-hyperlink-email" },
    { text: "Setting", icon: "k-i-cog" },
  ];
  ngOnInit(): void {
  }
  toggleDrawer(event : any, drawer: DrawerComponent) {
    console.log("Working...", event)
    drawer.toggle(event);
  }

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }
}
