import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../models/Recipe";
import { BackendService } from "../../services/backend.service";
import { Tag } from "../../models/Tag";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  tags: Tag[];

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
    this.backendService.getTags().subscribe(tags => {
      this.tags = tags;
    });
  }

  onSubmit({ value, valid }) {
    this.backendService
      .getRecipesByTag(value.tagselector)
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }
}
