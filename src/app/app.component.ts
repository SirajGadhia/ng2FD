import {Component, ViewContainerRef} from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';


import {HeaderComponent} from './common/header';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent],
})

export class AppComponent {
    title = 'Siraj test';
    viewContainerRef: ViewContainerRef;
    public constructor(viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    
}
