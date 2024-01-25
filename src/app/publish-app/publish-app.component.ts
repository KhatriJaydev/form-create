import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../assets/data.json';

@Component({
  selector: 'app-publish-app',
  templateUrl: './publish-app.component.html',
  styleUrls: ['./publish-app.component.scss']
})
export class PublishAppComponent implements OnInit {
  applicationForm: FormGroup;
  appImatDialogActions: string;
  appDetails = data;
  appId: string;

  constructor(private route: ActivatedRoute) {
    this.applicationForm = new FormGroup({
      appDetailForm: new FormGroup({
        appName: new FormControl('', Validators.required),
        appId: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        miniApi: new FormControl('', Validators.required),
        targetApi: new FormControl('', Validators.required),
        deploymentVersion: new FormControl('', Validators.required),
        documentationLink: new FormControl('', Validators.required),
      }),
      networkDetailsForm: new FormGroup({
        internet: new FormControl('', Validators.required),
        customer: new FormControl('', Validators.required),
        http: new FormControl('', Validators.required),
        cellular: new FormControl('', Validators.required),
        posts: new FormControl('', Validators.required),
      }),
      limitsForm: new FormGroup({
        ramMb: new FormControl('', Validators.required),
        shares: new FormControl('', Validators.required),
        screatchSpace: new FormControl('', Validators.required),
        persistent: new FormControl('', Validators.required),
      }),
      entitlementForm: new FormGroup({
        cameraSnapshots: new FormControl('', Validators.required),
        cabinetOutputAccess: new FormControl('', Validators.required),
        videoAccess: new FormControl('', Validators.required),
        mqttTelemetry: new FormControl('', Validators.required),
        mqttRawDetectorEvents: new FormControl('', Validators.required),
        mqttPublish: new FormControl('', Validators.required),
        mqttAccess764Card: new FormControl('', Validators.required),
        priorityControl: new FormControl('', Validators.required)
      })
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      this.appId = param.get('appId');
      param.get('appId') ? this.setFormValue() : null;
    });
  }

  setFormValue(): void {
    const appDetails = this.appDetails.data.find(x => x.appId === this.appId);
    let entitlementsDetails = appDetails.entitlements;

    entitlementsDetails.forEach(element => {
      const control = this.applicationForm.get('entitlementForm').get(element);
      console.log(control);

      if (control) {
        control.patchValue(true);
      }
    });

    this.applicationForm.get('appDetailForm').patchValue(appDetails);
    this.applicationForm.get('networkDetailsForm').patchValue(appDetails);
    this.applicationForm.get('limitsForm').patchValue(appDetails);
    this.applicationForm.get('entitlementForm').patchValue({

    });
  }

  saveData() {
  }
}
