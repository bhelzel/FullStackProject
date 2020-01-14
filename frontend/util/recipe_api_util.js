export const fetchAllRecipes = () => (
  $.ajax({
    url: '/api/recipes',
    method: 'GET'
  })
)

export const fetchRecipe = recipe => (
  $.ajax({
    url: '/api/recipe/',
    method: 'GET',
    data: {recipe}
  })
)
