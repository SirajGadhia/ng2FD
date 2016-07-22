import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl} from '@angular/forms';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, TAB_DIRECTIVES, TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  moduleId: module.id,
  selector: 'dlg-about',
  templateUrl: 'dlg-about.component.html',
  styleUrls: ['dlg-about.component.css'],
  directives: [MODAL_DIRECTIVES, TAB_DIRECTIVES, TYPEAHEAD_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS],
})
export class DlgAboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
