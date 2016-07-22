import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {DlgAboutComponent} from './dlg-about';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, DlgAboutComponent],
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
