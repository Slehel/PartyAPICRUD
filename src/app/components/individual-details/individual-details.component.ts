import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import Individual from 'src/app/models/individual.model';
import { PartyService } from 'src/app/services/party.service';


@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.scss']
})
export class IndividualDetailsComponent implements OnInit,OnChanges {

  @Input() individual?: Individual;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentIndividual: Individual = {
    aristocratictitle: '',
    birthdate: '',
    birthcountry: '',
  };
  message = '';

  constructor(private partyservice: PartyService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentIndividual = { ...this.individual };
  }


  updateIndividual(): void {
    const data = {
      aristocratictitle: this.currentIndividual.aristocratictitle,
      birthdate: this.currentIndividual.birthdate,
      birthcountry: this.currentIndividual.birthcountry
    };

    if (this.currentIndividual.id) {
      this.partyservice.update(this.currentIndividual.id, data)
        .then(() => this.message = 'The Individual was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteIndividual(): void {
    if (this.currentIndividual.id) {
      this.partyservice.delete(this.currentIndividual.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The Individual was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

 

}
