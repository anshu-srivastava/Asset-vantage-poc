import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageEgComponent } from './components/image-eg/image-eg.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'layout' },
  { path: 'layout', component: LayoutComponent },
  { path: 'image', component: ImageEgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
