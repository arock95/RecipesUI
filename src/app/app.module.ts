import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { BackendService } from "./services/backend.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

@NgModule({
  declarations: [AppComponent, RecipesComponent, NotFoundComponent, AddRecipeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
