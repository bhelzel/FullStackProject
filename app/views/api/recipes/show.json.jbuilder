json.extract! @recipe, :id, :name, :ingredients, :directions, :recipe_type, :region, :vegan, :vegetarian, :pescetarian
json.photoUrl url_for(@recipe.photo)
