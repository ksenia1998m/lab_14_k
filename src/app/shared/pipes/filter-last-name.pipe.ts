import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Person } from '../models/person.model';

@Pipe({
  name: 'filterLastName'
})

export class FilterLastNamePipe implements PipeTransform {

  transform(persons: Person[], search: string) {
    if (!isNullOrUndefined(persons) && search.trim() !== "") {
      console.log(search);
      let filter_persons = persons.filter(
        person => person.lastname.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return filter_persons;
    }
    return persons;
  }

}
