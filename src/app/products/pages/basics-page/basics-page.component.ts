import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
 uppercase:string = 'UPPERCASE';
 lowercase:string = 'lowercase';
 titlecase:string = 'dAniEl aSanZA';

 customDate:Date = new Date();
}
