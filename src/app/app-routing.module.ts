import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AddRecipeComponent } from "./components/add-recipe/add-recipe.component";

const routes: Routes = [
  { path: "", component: RecipesComponent },
  { path: "add", component: AddRecipeComponent },
  { path: "search", component: RecipesComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
