import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecipeFormPage } from './recipe-form.page';
import { RecipeFormPageRoutingModule } from './recipe-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeFormPageRoutingModule
  ],
  declarations: [RecipeFormPage]
})
export class RecipeFormPageModule {}
