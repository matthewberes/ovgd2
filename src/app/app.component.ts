import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { interval } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
    interval(15000).subscribe(x => {
      this.banner(1);
      console.log(this.currBanner)
  });
  }
  title = 'ovgd';
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight

  currBanner = 1;
  
  openDialog() {
    this.dialog.open(DialogComponent, {
      height: '250px',
      width: '600px'
    })
  }

  banner(num: number) {
    if (this.currBanner == 1 && num == -1) {
      this.currBanner = 3;
      console.log(this.currBanner)
      return;
    } else if (this.currBanner == 3 && num == 1) {
      this.currBanner = 1;
      console.log(this.currBanner)
      return;
    } else {
      this.currBanner += num;
      console.log(this.currBanner)
    }
  }
}
