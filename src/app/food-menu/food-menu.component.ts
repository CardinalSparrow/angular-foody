import { Component, Input } from '@angular/core';
import { Meal } from '../meal';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css',
})
export class FoodMenuComponent {
  @Input() mealItem!: Meal;
}
