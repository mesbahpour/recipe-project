import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipesService, private shoppingListService:ShoppingListService) {

   }

  ngOnInit(): void {

  }

  addToShoppingList(){
    this.recipeService.addRecipeToShoppingList(this.recipe.ingredients);
  }
}
