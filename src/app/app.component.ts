import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-operations-json-server';
  sidebarOpened: boolean = false;

  sidebarToggle(){
    this.sidebarOpened = this.sidebarOpened? false : true;
  }
}
