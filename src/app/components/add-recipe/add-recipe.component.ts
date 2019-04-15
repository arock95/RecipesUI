import { Component, OnInit, ViewChild } from "@angular/core";
import { Recipe } from "../../models/Recipe";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.css"]
})
export class AddRecipeComponent implements OnInit {
  @ViewChild("addForm") form: any;
  constructor(private backendService: BackendService) {}

  ngOnInit() {}

  postRecipe({ value, valid }) {
    this.backendService.addRecipe(value).subscribe();
    this.form.reset();
  }
}
