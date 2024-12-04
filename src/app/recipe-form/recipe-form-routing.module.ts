import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeFormPage } from './recipe-form.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeFormPageRoutingModule {}
