import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //Variable title which is displayed in header.html file
  title: string = 'Task Tracker';
  showAddTask : boolean = false;
  subscription: Subscription;
  constructor(private uiService: UiService, private router: Router){
    this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask= value));

  }


  //Method which we are using to work when we click on the button
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url == route;
  }

}
