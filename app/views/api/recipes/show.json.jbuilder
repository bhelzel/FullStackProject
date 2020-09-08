json.extract! @recipe, :id, :name, :recipe_type, :region, :vegan, :vegetarian, :pescetarian, :ingredients, :directions
json.photoUrl url_for(@recipe.photo)
