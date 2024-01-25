import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppVersionComponent } from './create-app-version/create-app-version.component';
import { PublishAppComponent } from './publish-app/publish-app.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAppVersionComponent,
    pathMatch: 'full',
  },
  {
    path: 'create-app',
    component: PublishAppComponent,
    pathMatch: 'full',
  },
  {
    path: 'create-version/:appId',
    component: PublishAppComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
