export const fetchAllRecipes = () => (
  $.ajax({
    url: '/api/recipes',
    method: 'GET'
  })
);

export const fetchRecipe = recipeId => (
  $.ajax({
    url: `/api/recipes/${recipeId}`,
    method: 'GET',
  })
);

export const postRecipe = () => (
  $.ajax({
    url: '/api/recipes',
    method: 'POST',
    data: { data }
  })
);

export const editRecipe = recipeId => (
  $.ajax({
    url: `api/recipes/${recipeId}/edit`,
    method: 'EDIT',
    data: { data }
  })
);

export const postLikeToRecipe = id => (
  $.ajax({
    url: '/api/likes/',
    method: 'POST',
    data: { id }
  })
);

export const deleteLikeFromRecipe = id => (
  $.ajax({
    url: `/api/likes/${id}`,
    method: 'DELETE',
    data: { id }
  })
);
