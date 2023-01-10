import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  pauseResume: any;
  startIndex: number = 0;
  // Imagedata = [
  //   'https://www.w3schools.com/howto/img_nature_wide.jpg',
  //   'https://www.w3schools.com/howto/img_snow_wide.jpg',
  //   'https://www.w3schools.com/howto/img_mountains_wide.jpg'
  // ]
  Imagedata = [
    '../assets/images/banner/new-account .jpg',
    '../assets/images/banner/credit-card.jpg',
    '../assets/images/banner/fixed_deposit.jpg',    
  ]

  ngOnInit() {
    this.Repeat();
  }

  Repeat() {
    this.pauseResume = setTimeout(() => {
      this.FunctionSlide();
      this.Repeat();
    }, 3000);
  }

  FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));

    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      if (slide != undefined)
        slide.style.display = 'block';
      this.startIndex++;
    }
    else {
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

  // OnClick(index:number){
  //   const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
  //   for (const x of slides) {
  //     const y = x as HTMLElement;
  //     y.style.display = 'none';
  //   }

  //   const slide = slides[index] as HTMLElement;
  //     slide.style.display = 'block';
  //   //console.log(event.target.value);
  // }

  Start() {
    this.Repeat();
  }

  Stop() {
    clearInterval(this.pauseResume);
  }
}
