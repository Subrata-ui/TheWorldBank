import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OpenNewAccount } from 'src/app/models/user';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent {
  //#region Start of Local Variable
  btnCreateOrUpdate: string = "Create";
  stateList: Array<any> = [];
  imageFile: any;
  countryList: Array<any> = [
    { name: 'India', states: [{ name: 'West Bengal' }, { name: 'Delhi' }, { name: 'Karnataka' }, { name: 'Maharastra' }] },
    { name: 'Bangladesh', states: [{ name: 'Dhaka' }, { name: 'Rangapur' }, { name: 'Chattagram' }, { name: 'Khulna' }] },
    { name: 'Nepal', states: [{ name: 'Katmandu' }, { name: 'Birat Nagar' }, { name: 'Janakpur' }, { name: 'Pokhara' }] },
    { name: 'Bhutan', states: [{ name: 'Zhemgang' }, { name: 'Wangdue Phodrang' }, { name: 'Thimphu' }, { name: 'Dagana' }] },
    { name: 'China', states: [{ name: 'Beijing' }, { name: 'Hunan' }, { name: 'Fujian' }, { name: 'Shanghai' }] },
  ];

  public openAccountForm: FormGroup;
  submitted = false;
  selectAccountId: number = 0;
  //#endregion End of Local Variable

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
  ) { }

  ngOnInit() {    
    //Initialize form for new account opening
    this.openAccountForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: ['male', [Validators.required]],
      dateOfBirth: new FormControl('', [Validators.required]),
      mobNum: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pinNumber: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      imageInput: ['', [Validators.required]]
    });

    //Populate data in the form for edit.
    if (this.route.snapshot.params['id'] != undefined) {
      this.btnCreateOrUpdate = "Update";
      this.selectAccountId = parseInt(this.route.snapshot.params['id']);
      let trans = this.userService.GetNewlyCreatedAccount(this.selectAccountId)?.[0];
      this.changeCountry(trans.country);
      if (trans != null) {
        this.openAccountForm = this.formBuilder.group({
          firstName: new FormControl(trans.firstName, [Validators.required]),
          lastName: new FormControl(trans.lastName, [Validators.required]),
          gender: [trans.gender, [Validators.required]],
          dateOfBirth: new FormControl(trans.dateOfBirth, [Validators.required]),
          mobNum: new FormControl(trans.mobNum, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
          email: new FormControl(trans.email, [Validators.required, Validators.email]),
          address: new FormControl(trans.address, [Validators.required]),
          country: new FormControl(trans.country, [Validators.required]),
          state: new FormControl(trans.state, [Validators.required]),
          city: new FormControl(trans.city, [Validators.required]),
          pinNumber: new FormControl(trans.pinNumber, [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
          imageInput: ['', [Validators.required]]
        });
        // this.openAccountForm.controls['state'].setValue(trans.state);
        // this.openAccountForm.updateValueAndValidity()
      }
    }
  }

  //Function to populate state dropdown
  changeCountry(country: string) {
    this.stateList = this.countryList.filter(x => x.name == country)[0].states;
  }

  //File type validation
  onImageChangeFromFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      if (file.type != "image/jpeg") {
        this.openAccountForm.controls['imageInput'].setErrors({ 'incorrectFile': true });
      }
    }
  }

  //Convenience getter for easy access to form fields
  get f() { return this.openAccountForm.controls; }

  public hasError = (controlName: string, errorName: string) => {
    return this.openAccountForm.controls[controlName].hasError(errorName);
  }

  //Function to add or update account details
  public OpeningNewAccount = (ownerFormValue: any) => {
    if (this.openAccountForm.valid) {

      //For edit
      if (this.selectAccountId != undefined && this.selectAccountId != 0) {
        let allResult = JSON.parse(localStorage.getItem("openingNewAccount") || '{}');

        if (allResult.length > 0) {
          //First find the index of record which need to delete.
          let index = allResult.findIndex((x: { id: number; }) => x.id == this.selectAccountId);
          //Then remove from the array item list
          allResult.splice(index, 1);

          let owner: OpenNewAccount = {
            id: index + 1,
            firstName: ownerFormValue.firstName,
            lastName: ownerFormValue.lastName,
            gender: ownerFormValue.gender,
            dateOfBirth: ownerFormValue.dateOfBirth,
            mobNum: ownerFormValue.mobNum,
            email: ownerFormValue.email,
            address: ownerFormValue.address,
            country: ownerFormValue.country,
            state: ownerFormValue.state,
            city: ownerFormValue.city,
            pinNumber: ownerFormValue.pinNumber,
            imageInput: ownerFormValue.imageInput,

          }

          //Then add the new record
          allResult.splice(index, 0, owner);

          //Set this.selectAccountId = 0;
          this.selectAccountId = 0;

          //this.userService.OpenNewAccount(allResult);
          localStorage.setItem("openingNewAccount", JSON.stringify(allResult));
          this.notificationService.success("Data updated successfully.");
        }
      }
      //For add
      else {
        this.executeOwnerCreation(ownerFormValue);
        this.notificationService.success("You have successfully applied, we will get back to you soon.");
        
        this.router.navigate(['home']);
      }
    }
  }

  //Function to prepare account details object for add.
  private executeOwnerCreation = (ownerFormValue: {
    firstName: any;
    lastName: any;
    gender: string;
    dateOfBirth: any;
    mobNum: any;
    email: string;
    address: string;
    country: string;
    state: string;
    city: string;
    pinNumber: number;
    imageInput: File;
  }) => {

    let allResult = Array.from(JSON.parse(localStorage.getItem("openingNewAccount") || '{}'));
    let _id = Array.from(allResult);
    //var item = Array.from(JSON.parse(localStorage.getItem("openingNewAccount") || '{}'));
    let owner: OpenNewAccount = {
      id: _id.length + 1,
      firstName: ownerFormValue.firstName,
      lastName: ownerFormValue.lastName,
      gender: ownerFormValue.gender,
      dateOfBirth: ownerFormValue.dateOfBirth,
      mobNum: ownerFormValue.mobNum,
      email: ownerFormValue.email,
      address: ownerFormValue.address,
      country: ownerFormValue.country,
      state: ownerFormValue.state,
      city: ownerFormValue.city,
      pinNumber: ownerFormValue.pinNumber,
      imageInput: ownerFormValue.imageInput,

    }
    //this.userService.OpenNewAccount(allResult);

    //Then add the new record
    allResult.push(owner);
    localStorage.setItem("openingNewAccount", JSON.stringify(allResult));
  }
}
