import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-network-information',
  templateUrl: './network-information.component.html',
  styleUrls: ['./network-information.component.scss']
})
export class NetworkInformationComponent {
  @Input() networkDetailsForm: FormGroup;
}
