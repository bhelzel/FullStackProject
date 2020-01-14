export const fetchAllRecipes = () => (
  $.ajax({
    url: '/api/recipes',
    method: 'GET'
  })
)

export const fetchRecipe = recipeId => (
  $.ajax({
    url: `/api/recipes/${recipeId}`,
    method: 'GET',
  })
)
