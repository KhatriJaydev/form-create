import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../assets/data.json';

@Component({
  selector: 'app-create-app-version',
  templateUrl: './create-app-version.component.html',
  styleUrls: ['./create-app-version.component.scss']
})
export class CreateAppVersionComponent {

  appDetails = data;

  constructor(public router: Router) { };

  createNewApp() {
    this.router.navigate(['create-app']);
  }

  createNewVersion(appId: string) {
    this.router.navigateByUrl(`create-version/${appId}`);
  }
}
