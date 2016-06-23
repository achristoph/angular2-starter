import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from '../services/person.service';
@Pipe({
  name: 'PersonPipe',
})

export class PersonPipe implements PipeTransform {
  transform(value: any, term: string): any {
    return value.filter((person: IPerson) => {
      if (term && term !== '') {
        return person.Name.indexOf(term) >= 0;
      }
      return true;
    });
  }
}
