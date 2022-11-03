import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipeItem (val:Recipe) {
    this.recipe = val;
  }
}
