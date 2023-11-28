import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public fire: Firestore) { }

  async  writeMe(email:string, firstname:string, lastname:string, addres:string, phone:string,
   password:string, nextphone:string, gender:string, state:string, regstatus:string, nextofkin:string,
    relationship:string){const forum= await addDoc(collection(this.fire, 'rain'), {
      email, firstname, lastname, addres, password, gender, state, regstatus, nextofkin, phone,
      relationship, nextphone
   })}

public getWebsiteData(){
  const colRef = collection (this.fire, 'webmore') 
  return collectionData(colRef, 
    {idField: 'id'});}

//to update data on mainsite
editDataValue(v:any, newValue:any){
  const docRefs = doc (this.fire, 'webmore', newValue )
  updateDoc(docRefs,{text:v})
}


}