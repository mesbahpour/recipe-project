import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesService } from '../shared/services/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() recipeLoaded: EventEmitter<string> = new EventEmitter<string>();
  foodName!:string;


  constructor( private recipeService:RecipesService) { 
    this.recipeService.foodSubject.subscribe(val=>{
      this.foodName= val.name;  
    })
  }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(val=>{
    })
  }
  
  onSelect(val:string) {
    this.recipeLoaded.emit(val);  
  }

}
