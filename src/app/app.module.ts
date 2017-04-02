import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { CloudinaryModule } from '@cloudinary/angular';
import { Cloudinary } from 'cloudinary-core/cloudinary-core-shrinkwrap';

import { AppComponent } from './app.component';
import { PhotoThumbComponent } from './photo-thumb/photo-thumb.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

import { routes } from './app.routes';

const cloudinaryLib = {
  Cloudinary: Cloudinary
};

@NgModule({
  declarations: [
    AppComponent,
    PhotoThumbComponent,
    HomeComponent,
    ViewComponent
  ],
  imports: [
    CloudinaryModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CloudinaryModule.forRoot(cloudinaryLib, {
      cloud_name: 'elsmore-me'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
