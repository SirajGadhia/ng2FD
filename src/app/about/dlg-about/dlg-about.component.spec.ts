/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DlgAboutComponent } from './dlg-about.component';

describe('Component: DlgAbout', () => {
  it('should create an instance', () => {
    let component = new DlgAboutComponent();
    expect(component).toBeTruthy();
  });
});
