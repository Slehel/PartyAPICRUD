import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Individual from '../models/individual.model';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private dbPath = '/individuals';

  accountsRef: AngularFirestoreCollection<Individual>;

  constructor(private db: AngularFirestore) {
    this.accountsRef = db.collection(this.dbPath);
}
getAll(): AngularFirestoreCollection<Individual> {
  return this.accountsRef;
}

create(individual: Individual): any {
  console.log(individual)
  return this.accountsRef.add({ ...individual });
}

update(id: string, data: any): Promise<void> {
  return this.accountsRef.doc(id).update(data);
}

delete(id: string): Promise<void> {
  return this.accountsRef.doc(id).delete();
}
}
