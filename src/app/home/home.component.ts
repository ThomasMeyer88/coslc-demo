import { AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {

  slideIndex = 1;

  constructor(
    private apr: ApplicationRef,
    private cdr: ChangeDetectorRef
  ) {
  }

  alertHTML = `<a href="http://coslc.org/wp-content/uploads/2021/06/Christ-Our-Savior-Administrative-Assistant.pdf">Administrative Assistant</a>`;
  
  alertText = `Christ Our Savior is hiring a part time ${this.alertHTML}. To apply, please send your resume to <b>jobs@coslc.org</b>`
  
  watchText = `We invite you to join us online (Sunday at 10:30 AM) by watching our live stream or listening to our live broadcast.`
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
  }


  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none"
    }
    (slides[this.slideIndex-1] as HTMLElement).style.display = "inline-block";
    this.cdr.detectChanges();
  }

}
