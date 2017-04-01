import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { Cloudinary } from 'cloudinary-core';
import { CloudinaryModule } from '@cloudinary/angular';

import { AppComponent } from './app.component';
import { PhotoThumbComponent } from './photo-thumb/photo-thumb.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

import { routes } from './app.routes';

export const cloudinaryLib = {
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
    BrowserModule,
    FormsModule,
    HttpModule,
    CloudinaryModule.forRoot(cloudinaryLib, { cloud_name: 'elsmore-me'}),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
