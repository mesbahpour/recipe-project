import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipes :Recipe[] = [];
  @Output() selectedRecipe:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  

  constructor(private recipeService:RecipesService) { }

  ngOnInit(): void {
  }

  onSelectRecipe(val:Recipe) {
    this.selectedRecipe.emit(val);
    this.recipeService.foodSubject.next(val);
  }

}
