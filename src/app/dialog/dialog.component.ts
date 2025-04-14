import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(public router: Router){}

  email() {
    window.open('mailto:email@address.com', '_blank')
  }

  call() {
    window.open('tel:+16136871111', '_blank')
  }
}
