import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [],
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Jair';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Jair', 'Deyner', 'Shanthal', 'Rolly', 'Piero'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // keyValue
  public person = {
    name: 'Jair',
    age: 26,
    address: 'Lima - Perú',
  };

  // async
  public myObervableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('xd');
    }, 3500);
  });
}
