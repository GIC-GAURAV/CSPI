import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleDrawer = new EventEmitter<boolean>();
  showMenu  = true;
  kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

  goToProfile(){
    this.router.navigate(['/profile'])
  }
  onlogout(){
    sessionStorage.removeItem('UserInfo');
    this.router.navigate(['/account'])
  }

  showHideMenu(){
    this.showMenu = !this.showMenu;
    this.toggleDrawer.next(this.showMenu );
   // localStorage.setItem("drawer", this.showMenu.toString());
  //  this.drawerService.setItem("drawer", this.showMenu.toString());
  }

}
