import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {


  registertaion:FormGroup = this.fb.group({
    Name:[null,[Validators.required]],
    Email:[null,[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    UserName:[null,[Validators.required,Validators.pattern(/^[^\s]+$/)]],
    password:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
    confirmpassword:[null,[Validators.required]],
    Address: this.fb.array([])
  },
  {
    validator: ConfirmedValidator('password','confirmpassword')
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get getControl() {
    // console.log(this.registertaion.controls);
    return this.registertaion.controls
  }

  sendData() {
    // console.log(this.registertaion)
  }

  get Address() : FormArray {
    return this.registertaion.get("Address") as FormArray
  }

  newAddress (): FormGroup {
    return this.fb.group({
      place: [null,[Validators.required,Validators.pattern(/[0-9]*[A-Za-z]+[0-9]*/)]],
      Street: [null,[Validators.required,Validators.pattern(/[0-9]*[A-Za-z]+[0-9]*/)]],
      Country: [null,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
      City: [null,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]]
    })
    
  }

  addAddress() {
    this.Address.push(this.newAddress());
  }

  removeAddress(i:number) {
    this.Address.removeAt(i);
  }

  onSubmit() {
    
  }
}
