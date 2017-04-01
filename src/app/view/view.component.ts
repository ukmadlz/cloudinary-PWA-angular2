import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  publicId: any;
  paramsSub: any;

  cloudinaryImages=[
    {
      publicId: 'person_1',
      name: 'Person A'
    },
    {
      publicId: 'person_2',
      name: 'Person B'
    },
    {
      publicId: 'person_3',
      name: 'Person C'
    },
    {
      publicId: 'person_4',
      name: 'Person D'
    },
    {
      publicId: 'person_5',
      name: 'Person E'
    },
    {
      publicId: 'person_6',
      name: 'Person F'
    },
    {
      publicId: 'person_7',
      name: 'Person G'
    },
    {
      publicId: 'person_8',
      name: 'Person H'
    }
  ];
  imageData: Object;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.publicId = params['publicId']);
    this.cloudinaryImages.forEach((image) => {
      if(image.publicId == this.publicId) {
        this.imageData = image;
      }
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
