import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OpenNewAccount } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent {
  stateList: Array<any> = [];
  imageFile: any;
  countryList: Array<any> = [
    { name: 'India', states: [{ name: 'Kolkata' }, { name: 'Delhi' }, { name: 'Bangalore' }, { name: 'Mumbai' }] },
    { name: 'Bangladesh', states: [{ name: 'Dhaka' }, { name: 'Rangapur' }, { name: 'Chattagram' }, { name: 'Khulna' }] },
    { name: 'Nepal', states: [{ name: 'Katmandu' }, { name: 'Birat Nagar' }, { name: 'Janakpur' }, { name: 'Pokhara' }] },
    { name: 'Bhutan', states: [{ name: 'Zhemgang' }, { name: 'Wangdue Phodrang' }, { name: 'Thimphu' }, { name: 'Dagana' }] },
    { name: 'China', states: [{ name: 'Beijing' }, { name: 'Hunan' }, { name: 'Fujian' }, { name: 'Shanghai' }] },
  ];
  changeCountry(country: string) {
    this.stateList = this.countryList.filter(x => x.name == country)[0].states;
  }


  public ownerForm: FormGroup;
  submitted = false;
  selectAccountId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectAccountId = this.route.snapshot.params['id'];
    this.ownerForm = this.formBuilder.group({
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




    if (this.selectAccountId != 0) {
      //this.ownerForm.setValue(this.userService.GetNewlyCreatedAccount().filter(x => x.id == this.selectAccountId));
    }
  }

  //file type validation
  onImageChangeFromFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      if (file.type != "image/jpeg") {
        this.ownerForm.controls['imageInput'].setErrors({ 'incorrectFile': true });
      }
    }
  }

  //custom validation
  checkFileType(control: AbstractControl): { [key: string]: any } | null {
    const files: File[] = control.value;
    let errors: string[] = [];

    if (files.length >= 1) {
      for (let index = 0; index < files.length; index++) {
        //Use a type list here to check for your types for example "image/jpeg"
        if (files[index].type === '') {
          errors.push(`${files[index].name} has an invalid type of unknown\n`);
        }
      }

      return errors.length >= 1 ? { invalid_type: errors } : null;
    }
    return null;  // no file, can be capture by "Required" validation 
  }

  // convenience getter for easy access to form fields
  get f() { return this.ownerForm.controls; }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public OpeningNewAccount = (ownerFormValue: any) => {
    if (this.ownerForm.valid) {
      if (this.selectAccountId != 0) {
        //First find the index of record which need to delete.
        //Then remove from the array item list
        //Then add the new record
        //Set this.selectAccountId = 0;
      }
      else {
        this.executeOwnerCreation(ownerFormValue);
      }

    }
  }

  private executeOwnerCreation = (ownerFormValue: { firstName: any; lastName: any; dateOfBirth: any; }) => {
    let owner: OpenNewAccount = {
      id: this.userService.GetNewlyCreatedAccount().length + 1,
      firstName: ownerFormValue.firstName,
      lastName: ownerFormValue.lastName,
      dateOfBirth: ownerFormValue.dateOfBirth
    }
    this.userService.OpenNewAccount(owner);
  }
  handleFileInput(event: any) {

    if (event.target.files && event.target.files[0]) {

      this.imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

    }
  }

}
