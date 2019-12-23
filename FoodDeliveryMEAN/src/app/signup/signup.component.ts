import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  submitted = false;
  signupForm: FormGroup;

  constructor(private router:Router, private SignupService:SignupService, public fb: FormBuilder, private ngZone: NgZone) { }

  ngOnInit() {
    this.mainForm();
  }
  

  mainForm() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      moblie: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
     
    })
  }


  
  // Getter to access form control
  get myForm(){
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.signupForm.valid) {
      return false;
    } else {
      this.SignupService.createSignup(this.signupForm.value).subscribe(
        (res) => {
          console.log('Signup successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/signup-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}

