import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../meal.service';
import { Meal } from '../meal';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  mealService = inject(MealService);
  meal: Meal | undefined;

  orderForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor() {
    const mealId = parseInt(this.route.snapshot.params['id']);
    this.meal = this.mealService.getMealsById(mealId);
  }
  submitOrder() {
    this.mealService.submitOrder(
      this.orderForm.value.firstName ?? '',
      this.orderForm.value.lastName ?? '',
      this.orderForm.value.email ?? '',
      this.orderForm.value.address ?? ''
    );
  }
}
