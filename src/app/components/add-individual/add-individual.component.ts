import { Component, OnInit } from '@angular/core';
import Individual from 'src/app/models/individual.model';
import { PartyService } from 'src/app/services/party.service';

@Component({
  selector: 'app-add-individual',
  templateUrl: './add-individual.component.html',
  styleUrls: ['./add-individual.component.scss']
})
export class AddIndividualComponent implements OnInit {

  individual: Individual = new Individual();
  submitted = false;

  constructor(private partyService: PartyService) { }

  ngOnInit(): void {
  }
  saveIndividual(): void {
    this.partyService.create(this.individual).then(() => {
      console.log('Created new individual successfully!');
      this.submitted = true;
    });
  }

  newIndividual(): void {
    this.submitted = false;
    this.individual = new Individual();
  }
}
