import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})
export class NumbersPageComponent {
  public totalSells: number = 123456789.1289;
  public percentVar: number = 0.4856;
}
