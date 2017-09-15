import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";
import {ActivatedRoute, Router} from "@angular/router";
declare var jQuery :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];
  

  @ViewChild('bigMenu') bigMenu : Menu;
  @ViewChild('smallMenu') smallMenu : Menu;

  ngOnInit() {
    this.menuItems = [
      {label: 'Dashboard', icon: 'fa-home', routerLink: ['/dashboard'] },
      {label: 'All Times', icon: 'fa-calendar', routerLink: ['/alltimes']},
      {label: 'My Timesheet', icon: 'fa-clock-o', routerLink: ['/timesheet']},
      {label: 'Add Project', icon: 'fa-tasks', routerLink: ['/projects']},
      {label: 'My Profile', icon: 'fa-users', routerLink: ['/profile']},
      {label: 'Settings', icon: 'fa-sliders', routerLink: ['/settings']},
    ]
    this.miniMenuItems = [];
    this.menuItems.forEach( (item : MenuItem) => {
      let miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    })
    }
    
}
