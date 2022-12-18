import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner-dialog',
  templateUrl: './progress-spinner-dialog.component.html',
  styleUrls: ['./progress-spinner-dialog.component.css']
})
export class ProgressSpinnerDialogComponent implements OnInit {
  progress: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.Showprogressbar();
  }
  Showprogressbar() {
    this.Showprogress(); this.timer();
  }

  Showprogress() {
    this.progress = 0;
    setInterval(() => this.ProgressBar(), 300)
  }

  ProgressBar() {

    if (this.progress == 0) {
      this.progress = this.progress + 1
    } else {
      this.progress = this.progress + 1;
      if (this.progress = this.progress + 30) {
        this.progress == this.progress + 1;
        if (this.progress >= 100) {
          this.progress = 100;
        }
      }
    }
  }
  timer() {
    var timeleft = 6;
    var downloadTimer = setInterval(() => {
      
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        this.progress = 0;
      } 
      else {
        const element = document.querySelector<HTMLElement>('#countdown');
        if (element) {
          element.innerHTML = timeleft + "";
        }
      }

      timeleft -= 1;
    }, 1000);
    setInterval(() => clearInterval(downloadTimer), 6000)

  }
}   