import {EventEmitter} from "@angular/core";
import { Ingredient } from "src/app/models/ingredient.model";

export class ShoppingListService {

  ingredientEvent = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('بسته ماکارونی', 1),
    new Ingredient('پیاز', 2),
  ]

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(name:string, amount: number){
    this.ingredients.push(new Ingredient(name, amount))
    this.ingredientEvent.emit(this.ingredients.slice())
  }
  addFromRecipeShoppingList(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    console.log(this.ingredients);
    
    this.ingredientEvent.emit(this.ingredients.slice())
  }
}