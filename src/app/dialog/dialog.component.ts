import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  email() {
    window.open('mailto:email@address.com', '_blank')
  }

  call() {
    window.open('tel:+16136871111', '_blank')
  }
}
