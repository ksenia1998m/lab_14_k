import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from "./shared/models/person.model";
import {PersonsService} from "./shared/services/persons.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Пользователи';
  firstname_filter: boolean;
  search_firstname = "";
  search_lastname = "";
  lastname_filter: boolean;
  persons: any;
  constructor(private personsServise: PersonsService) { 
  }

  async ngOnInit() { 
    try {
      let getPersons = this.personsServise.getPersons();
      this.persons = (isNullOrUndefined(await getPersons)) ? [] : await getPersons;
    } catch (err) {
      console.log(err);
    }

  }

  ngOnDestroy(): void {
  }

  async onAddPerson (person: Person) {
    person.id = (this.persons.length) ? this.persons[this.persons.length - 1].id + 1 : 1;
    this.persons.push(person);
    try {
      await this.personsServise.postPersons({
        firstname: person.firstname, lastname: person.lastname, phone: person.phone});
    }
    catch (e) {
      console.error(e);
    }
  }

  async onEditPerson (editPerson: Person) {
    Object.assign (this.persons.find((el) => {
      return (el.id === editPerson.id)
    }), editPerson);
    try {
      await this.personsServise.putPersons(editPerson.id, {firstname: editPerson.firstname, lastname: editPerson.lastname, phone: editPerson.phone});
    }
    catch (e) {
      console.error(e);
    }
  }

  async onDeletePerson (deletePersonId: number) {
    this.persons.splice(this.persons.indexOf(this.persons.find((el) => {
      return (el.id === deletePersonId)
    })), 1); 
    try {
      await this.personsServise.deletePersons(deletePersonId);
    }
    catch (e) {
      console.error(e);
    }
  }
}
