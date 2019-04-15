import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Recipe } from "../models/Recipe";
import { Tag } from "../models/Tag";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class BackendService {
  url = "http://localhost:51774/api/recipes";
  tagsurl = "http://localhost:51774/api/tags";

  constructor(private httpClient: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.url);
  }

  getTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(this.tagsurl);
  }

  getRecipesByTag(tag): Observable<Recipe[]> {
    const searchurl = `${this.url}/${tag}`;
    return this.httpClient.get<Recipe[]>(searchurl);
  }

  addRecipe(recipe): Observable<Recipe> {
    return this.httpClient.post<Recipe>(this.url, recipe, httpOptions);
  }
}
