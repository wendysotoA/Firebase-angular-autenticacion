import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';
import { Projects } from '../shared/models/proyectos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectoserviceService {

proyectos: Observable<Projects[]>;

private proyectosCollection:AngularFirestoreCollection<Projects>;

  constructor(private readonly Afs: AngularFirestore) {
    this.proyectosCollection=Afs.collection<Projects>('Proyectos');
    this.getProyectos();
  }

  deleteProject(proyId:string):Promise<void>{
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.proyectosCollection.doc(proyId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  GuardarProject(proy:Projects, proyId:string):Promise<void>{
    return new Promise(async (resolve,reject) => {
      try {
        const id=proyId || this.Afs.createId();
        const data = { id, ...proy };
        const result = await this.proyectosCollection.doc(id).set(data);
        resolve(result);

      } catch (err) {
        reject(err.message);

      }

    })

  }

  private getProyectos():void{
    this.proyectos=this.proyectosCollection.snapshotChanges().pipe(
      map(action=> action.map(a=>a.payload.doc.data()as Projects))
    )
  }

}
