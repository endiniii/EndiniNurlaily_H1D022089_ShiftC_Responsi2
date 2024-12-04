import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  recipes: any[] = [];
  newRecipe = { name: '', steps: '' };
  isAdding = false;

  constructor(private firestore: AngularFirestore) {
    this.getRecipes();
  }

  async addRecipe() {
    try {
      if (this.newRecipe.name && this.newRecipe.steps) {
        await this.firestore.collection('recipes').add(this.newRecipe);
        this.newRecipe = { name: '', steps: '' }; // Reset form
        alert('Resep berhasil ditambahkan!');
        this.getRecipes(); // Refresh daftar resep
      } else {
        alert('Harap isi semua field.');
      }
    } catch (error: any) {
      alert('Error: ' + error.message);
    }
  }

  async editRecipe(recipeId: string, updatedRecipe: any) {
    try {
      await this.firestore.collection('recipes').doc(recipeId).update(updatedRecipe);
      alert('Resep berhasil diperbarui!');
      this.getRecipes(); // Refresh daftar resep
    } catch (error: any) {
      alert('Error: ' + error.message);
    }
  }

  async deleteRecipe(recipeId: string) {
    try {
      await this.firestore.collection('recipes').doc(recipeId).delete();
      alert('Resep berhasil dihapus!');
      this.getRecipes(); // Refresh daftar resep
    } catch (error: any) {
      alert('Error: ' + error.message);
    }
  }

  getRecipes() {
    this.firestore.collection('recipes').valueChanges({ idField: 'id' }).subscribe((data: any[]) => {
      this.recipes = data;
    });
  }
}
