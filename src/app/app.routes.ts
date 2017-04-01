import { Routes } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view/:publicId', component: ViewComponent }
];
