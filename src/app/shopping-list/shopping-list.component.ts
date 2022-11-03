import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = []

  constructor(private shoppingListService:ShoppingListService) {
    this.ingredients = this.shoppingListService.getIngredient();
   }

  ngOnInit(): void {
  }

  addtoShoppingList(event:Event, name:string, amount:string) {
    event.preventDefault();
    this.ingredients.push(new Ingredient(name, +amount));
  }

}
