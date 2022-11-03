import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flg:boolean = true;

  recipeLoaded(val:string) {
    this.flg = val=='recipe' ? true : false;
  }
}
