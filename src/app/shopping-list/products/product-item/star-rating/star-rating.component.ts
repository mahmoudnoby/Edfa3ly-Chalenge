import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements  OnChanges {
 @Input() starRating: number;
  starWidth: number;
  constructor() { }



  ngOnChanges(): void {
    this.starWidth = this.starRating * 90 / 5;
  }


}
