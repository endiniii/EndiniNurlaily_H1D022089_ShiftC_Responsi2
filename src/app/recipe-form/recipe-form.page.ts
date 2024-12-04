import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.page.html',
  styleUrls: ['./recipe-form.page.scss'],
})
export class RecipeFormPage {
  name: string = '';
  steps: string = '';

  constructor(private firestore: Firestore, private router: Router) {}

  async saveRecipe() {
    const recipesRef = collection(this.firestore, 'recipes');
    await addDoc(recipesRef, { name: this.name, steps: this.steps });
    this.router.navigate(['/home']);
  }
}
