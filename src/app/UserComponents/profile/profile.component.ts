import { Component, AfterViewInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  ngAfterViewInit() {
    // Initialize Flowbite modal, dropdown, etc after Angular renders DOM
    initFlowbite();
  }

}