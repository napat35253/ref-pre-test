import { HomeComponent } from './home/home.component';
import { Task1Component } from './task1/task1.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task2Component } from './task2/task2.component';

const routes: Routes = [
  {
    path: 'task1',
    component: Task1Component,
  },
  {
    path: 'task2',
    component: Task2Component,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
