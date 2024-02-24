import { Injectable } from '@angular/core';
import { Meal } from './meal';
import { get } from 'http';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  readonly imageUrl = '../assets/images';
  protected foodItemsList: Meal[] = [
    {
      id: 0,
      name: 'food1',
      type: 'veggie',
      serving: 'hot',
      photo: `${this.imageUrl}/imd.png`,
      availableUnits: 9,
      delivery: true,
    },
    {
      id: 1,
      name: 'food2',
      type: 'regular',
      serving: 'hot or cold',
      photo: `${this.imageUrl}/Dream.png`,
      availableUnits: 7,
      delivery: true,
    },
    {
      id: 2,
      name: 'food3',
      type: 'veggie',
      serving: 'warm',
      photo: `${this.imageUrl}/imd.png`,
      availableUnits: 3,
      delivery: true,
    },
    {
      id: 3,
      name: 'food4',
      type: 'regular',
      serving: 'hot',
      photo: `${this.imageUrl}/Dream.png`,
      availableUnits: 2,
      delivery: true,
    },
    {
      id: 4,
      name: 'food5',
      type: 'veggie',
      serving: 'cold',
      photo: `${this.imageUrl}/Dream.png`,
      availableUnits: 8,
      delivery: true,
    },
  ];

  getAllMeals(): Meal[] {
    return this.foodItemsList;
  }
  getMealsById(id: number): Meal | undefined {
    return this.foodItemsList.find((mealItem) => mealItem.id === id);
  }
  submitOrder(
    firstName: string,
    lastName: string,
    email: string,
    address: string
  ) {
    if (firstName && lastName && email && address) {
      console.log(
        `Order received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.
      ordered for ${this.foodItemsList}`
      );
      alert(
        `Order received: ${firstName} ${lastName}, You successfully ordered for this meal. It will be delivered to you at ${address}`
      );
    } else {
      alert('Fill out all fields');
    }
  }
  constructor() {}
}
