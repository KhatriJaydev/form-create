import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishAppComponent } from './publish-app/publish-app.component';

const routes: Routes = [
  {
    path: '',
    component: PublishAppComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
