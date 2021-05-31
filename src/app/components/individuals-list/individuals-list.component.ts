import { Component, OnInit } from '@angular/core';
import { PartyService } from 'src/app/services/party.service';
import { map } from 'rxjs/operators';
import Individual from 'src/app/models/individual.model';

@Component({
  selector: 'app-individuals-list',
  templateUrl: './individuals-list.component.html',
  styleUrls: ['./individuals-list.component.scss']
})
export class IndividualsListComponent implements OnInit {

  individuals?: Individual[];
  currentIndividual?: Individual;
  currentIndex = -1;
  title = '';

  constructor(private partyservice: PartyService) { }

  ngOnInit(): void {
    this.retrieveIndividuals();
  }
  refreshList(): void {
    this.currentIndividual = undefined;
    this.currentIndex = -1;
    this.retrieveIndividuals();
  }

  retrieveIndividuals(): void {
    this.partyservice.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.individuals = data;
    });
  }

  setActiveIndividual(individual: Individual, index: number): void {
    this.currentIndividual = individual;
    this.currentIndex = index;
  }
  

}
