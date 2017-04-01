import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

}
