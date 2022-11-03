import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() onSelectRecipeItem:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  constructor( private recipeService:RecipesService) { 
    this.recipes = this.recipeService.getRecipe();
  }

  ngOnInit(): void {
    
  }


  onSelectRecipe (val: Recipe) {
    this.onSelectRecipeItem.emit(val);
    this.recipeService.selectedRecipe.emit(val);
  }
}
