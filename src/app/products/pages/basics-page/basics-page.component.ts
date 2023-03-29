import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [],
})
export class BasicsPageComponent {
  public nameLower: string = 'jair';
  public nameUpper: string = 'JAIR';
  public fullName: string = 'JaIr TElLo';
  public customDate: Date = new Date();
}
