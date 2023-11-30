import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InattiviComponent } from './pages/inattivi/inattivi.component';
import { AttiviComponent } from './pages/attivi/attivi.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Attivi',
    component: AttiviComponent
  },
  {
    path: 'Inattivi',
    component: InattiviComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
