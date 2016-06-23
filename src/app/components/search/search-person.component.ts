import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IPerson, PersonService } from '../../services/person.service';
import {PersonPipe} from '../../pipes/person.pipe';

@Component({
  moduleId: module.id,
  pipes: [PersonPipe],
  providers: [PersonService],
  selector: 'app-search',
  styles: [require('./search-person.component.css')],
  template: require('./search-person.component.html'),
})

export class SearchPersonComponent implements OnInit {
  @Input() sensors: IPerson[];
  @Output() addPerson: EventEmitter<IPerson> = new EventEmitter<IPerson>();
  reassignTo: IPerson;
  reassignToPerson: IPerson = { Id: 1, Name: 'Smith, John', ParentTeam: 'J3 Operations', Type: '1', selected: true };
  isReassignToAddButtonDisabled: boolean;
  informedParties: IPerson[];
  selectedPeople: IPerson[];
  private people: IPerson[];

  constructor(private _personService: PersonService) {
  }

  ngOnInit(): void {
    this.reassignTo = this.reassignToPerson;
    this._personService.getPeople().subscribe((data: any) => {
      this.people = data.filter(
        (p: IPerson) => {
          return this.reassignTo.Id !== p.Id;
        });
    });
    this.selectedPeople = [];
    this.informedParties = [];
  }

  addReassignTo(): void {
    this.reassignTo = this.selectedPeople[0];
    this.people = this.people.filter((p: IPerson) => p !== this.selectedPeople[0]);
    this.selectedPeople = [];
  }

  addInformedParties(): void {
    this.informedParties = [...this.informedParties, ...this.selectedPeople];
    this.people = this.people.filter((p: IPerson) => this.selectedPeople.indexOf(p) < 0);
    this.selectedPeople = [];
  }

  removeReassignTo(): void {
    this.reassignTo.selected = false;
    this.people = [this.reassignTo, ...this.people];
    this.reassignTo = undefined;
  }

  removeInformedParties(person: any): void {
    this.informedParties = this.informedParties.filter((p: IPerson) => p.Id !== person.Id);
    person.selected = false;
    this.people = [person, ...this.people];
  }

  check(event: any, person: any): void {
    person.selected = !person.selected;
    this.selectedPeople = this.people.filter((p: IPerson) => p.selected === true);
    this.isReassignToAddButtonDisabled = !(this.reassignTo === undefined && this.selectedPeople.length === 1);
  }

  search(personName: string): void {
    this._personService.getPeople().subscribe((data: any) => {
      this.people = data.filter(
        (p: IPerson) => {
          personName = personName.replace(/\*/, '');
          return p.Name.toLowerCase().indexOf(personName) >= 0 && this.reassignTo.Id !== p.Id
          && !(this.informedParties.some((ip: IPerson) => ip.Id === p.Id));
        }
      );
    });
  }

}
