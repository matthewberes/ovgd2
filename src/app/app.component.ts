import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
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
