import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from "../shared/models/person.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})

export class PersonAddComponent implements OnInit {

  @Output() addperson = new EventEmitter<Person>();
  personForm: FormGroup;
  disabledForms = false;
  constructor() { }

  ngOnInit() {
    this.personForm = new FormGroup( {
      firstname: new FormControl({value: '', disabled: this.disabledForms}, 
      [Validators.required]),
      lastname: new FormControl({value: '', disabled: this.disabledForms}, 
      [Validators.required]),
      phone: new FormControl({value: '', disabled: this.disabledForms}, 
      [Validators.required])
    })
  }

  public mask = ['+', 7, '(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];

  onAddPerson(inputFirstName, inputLastName, inputPhone) {
    let person = new Person (inputFirstName.value, inputLastName.value, inputPhone.value);
    this.addperson.emit(person);
  }
}
