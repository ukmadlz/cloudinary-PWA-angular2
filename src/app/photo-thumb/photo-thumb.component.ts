import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-thumb',
  templateUrl: './photo-thumb.component.html',
  styleUrls: ['./photo-thumb.component.css']
})
export class PhotoThumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked(event, imageData) {
    event.preventDefault();
    console.log(imageData)
  }

  @Input() imageData: {publicId: string, name: string};

}
