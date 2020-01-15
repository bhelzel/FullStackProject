json.array! @recipes do |recipe|
  json.extract! recipe, :id, :name
  json.photoUrl url_for(recipe.photo)
end
