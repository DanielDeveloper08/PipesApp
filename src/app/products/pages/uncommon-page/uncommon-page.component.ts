import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Daniel';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
   if( this.gender == 'male' ) {
      this.name = 'Melissa' 
      this.gender = 'female'
   }else{
      this.name = 'Daniel'
      this.gender = 'male'
   }
  }

  public messageClientMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  //i18nPlural
  public clients: string[]=['Maria', 'Josue', 'Daniel', 'Steven', 'Natalia', 'Carlos', 'Pedro'];

  deleteClient():void{
    this.clients.shift()
  }

  restartClients(){
    this.clients = ['Maria', 'Josue', 'Daniel', 'Steven', 'Natalia', 'Caros', 'Pedro'];
  }

  //Json Pipe
  public me = {
    firstName: 'Daniel',
    lastName: 'Asanza',
    age: 22,
    country: 'Ecuador',
    profile: 'Developer frontend'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap( value => console.log )
  )
}
