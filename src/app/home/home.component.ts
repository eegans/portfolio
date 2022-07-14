import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
  quote: string = "";
  isLoading: boolean = true;
  loadingImg: boolean = false;

  displayMessage: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoading = false;
    this.loadingImg = false;
  }

  ngAfterViewInit() {
    //this.waitForImage();
  }

  // *** Check to see if the element exists before we add anything *** //
  waitForElementToDisplay(selector: string, time: number): void {
    if (document.querySelector(selector) != null) {
      //Do logic
      this.isLoading = false;
      return;
    } else {
      setTimeout(() => {
        this.waitForElementToDisplay(selector, time);
      }, time);
    }
  }

  imagesHaveLoaded() {
    return Array.from(document.images).every(i => i.complete);
  }

  // waitForImage() {
  //   const img = new Image();
  //   const div = document.querySelector('.ice');   
  //   const bgStyle = getComputedStyle(div).backgroundImage;
  //   const src = bgStyle.replace(/(^url\()|(\)$|[\"\'])/g, '');
  //   img.src = src;

  //   img.addEventListener('load', () => {
  //     this.loadingImg = false;
  //   });
  // }

  goToResume() {
    this.router.navigate(['/resume']);
  }

  //   onScrollInit(items: any) {
  //     const offset = window.innerHeight / 1.6;
  //     items.each( function() {
  //       const elem = items,
  //           animationClass = elem.attr('data-animation'),
  //           animationDelay = elem.attr('data-delay');

  //           elem.css({
  //             '-webkit-animation-delay':  animationDelay,
  //             '-moz-animation-delay':     animationDelay,
  //             'animation-delay':          animationDelay
  //           });
  //   };
  // };
}
