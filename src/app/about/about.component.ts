import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  loadingImg: boolean = true;
  imageCollection = <any>[];


  constructor() { 
    this.imageCollection = [
      { url: '/assets/Images/me3.jpg', show: false },
      { url: '/assets/Images/me2.jpg', show: false },
      { url: '/assets/Images/me4.jpg', show: false },
      { url: '/assets/Images/me10.jpg', show: false },
      { url: '/assets/Images/me8.jpg', show: false }
    ];

  }

  ngOnInit() {
    this.loadingImg = false;
  }

  imagesHaveLoaded(): boolean {
    console.log(Array.from(document.images).every(i => i.complete));
    return Array.from(document.images).every(i => i.complete);
  }
}
