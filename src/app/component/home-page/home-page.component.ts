import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  newContract: boolean = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      contractName: ['', Validators.required],
      validityDate: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      middleName: [''],
      terms:  ['', Validators.required],
      description: ['', Validators.required],
      contractType: ['', Validators.required],
      Spend: ['', Validators.required],
      Owner:['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      Address1: ['', Validators.required],
      Address2: ['', Validators.required],
      State: ['', Validators.required],
      City: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

  addContracts() {
    this.newContract = true;
  }
}
