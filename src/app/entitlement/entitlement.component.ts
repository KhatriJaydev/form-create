import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entitlement',
  templateUrl: './entitlement.component.html',
  styleUrls: ['./entitlement.component.scss']
})
export class EntitlementComponent {
  @Input() entitlementForm: FormGroup;
}
