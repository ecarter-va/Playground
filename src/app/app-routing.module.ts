import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { DynamicallyAnimatedBoxComponent } from './dynamically-animated-box/dynamically-animated-box.component';

const routes: Routes = [
  {path: '**', component: BoxComponent},
  {path: 'random-box', component: DynamicallyAnimatedBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
