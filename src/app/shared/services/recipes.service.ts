import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    
    new Recipe('دستور پخت ماکارونی',

      'یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم',
      
      'https://deow9bq0xqvbj.cloudfront.net/image-logo/935735/espageti.jpg',


        [new Ingredient('سیب زمینی', 1), new Ingredient('پیاز',3)]),
    new Recipe('دستور پخت سوپ',
      'یک توضیح تست برای دستور پخت سوپ قرار می دهیم',
      'https://deow9bq0xqvbj.cloudfront.net/image-logo/935735/espageti.jpg',
      [new Ingredient('رشته سوپی', 1), new Ingredient('سبزیجات',2)]),
    new Recipe('دستور پخت قرمه سبزی',
    'یک توضیح تست برای دستور پخت قرمه سبزی قرار می دهیم',
      'https://deow9bq0xqvbj.cloudfront.net/image-logo/935735/espageti.jpg',
      [new Ingredient('لوبیا', 2), new Ingredient('گوشت',2)]),
  ]

  constructor( private shoppingListService:ShoppingListService) { }

  getRecipe(){
    return this.recipes.slice()
  }

  addRecipeToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addFromRecipeShoppingList(ingredients);
  }

  foodSubject = new Subject<Recipe>();
}
