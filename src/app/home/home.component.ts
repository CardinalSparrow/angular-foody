import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FoodMenuComponent } from '../food-menu/food-menu.component';
import { Meal } from '../meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FoodMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foodItemsList: Meal[] = [];
  mealService: MealService = inject(MealService);
  filteredList: Meal[] = [];
  constructor() {
    this.foodItemsList = this.mealService.getAllMeals();
    this.filteredList = this.foodItemsList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredList = this.foodItemsList;
      return;
    }
    this.filteredList = this.foodItemsList.filter((meal) =>
      meal?.type.toLowerCase().includes(text.toLowerCase())
    );
  }
}
