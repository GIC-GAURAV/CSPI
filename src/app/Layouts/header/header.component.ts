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
  public splitButtonItems: Array<any> = [
    {
      text: "Keep Text Only",
      icon: "paste-plain-text",
      click: () => {
        console.log("Keep Text Only click handler");
      },
    },
    {
      text: "Paste as HTML",
      icon: "paste-as-html",
    },
    {
      text: "Paste Markdown",
      icon: "paste-markdown",
    },
    {
      text: "Set Default Paste",
    },
  ];
  kendokaAvatar = 'https://www.validchat.com/upload/photos/d-avatar.jpg';
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

  public onSplitButtonClick(): void {
    console.log("Paste");
  }
  public onSplitButtonItemClick(dataItem: any): void {
    if (dataItem) {
      console.log(dataItem.text);
    }
  }

  public onButtonClick() {
    console.log("click");
  }


}
