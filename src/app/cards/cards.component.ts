import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public cards = [
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      imgSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      imgSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      imgSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      imgSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
