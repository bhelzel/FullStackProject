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

export const postLikeToRecipe = id => (
  $.ajax({
    url: '/api/likes/',
    method: 'POST',
    data: { id }
  })
)

export const deleteLikeFromRecipe = id => (
  $.ajax({
    url: `/api/likes/${id}`,
    method: 'DELETE',
    data: { id }
  })
)
