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

export const postRecipe = recipe => {
  console.log(recipe);
  return $.ajax({
    url: '/api/recipes',
    method: 'POST',
    data: recipe ,
    contentType: false,
    processData: false
  });
};

export const editRecipe = recipeId => (
  $.ajax({
    url: `api/recipes/${recipeId}/edit`,
    method: 'EDIT',
    data: { data }
  })
);

export const deleteRecipe = recipeId => (
  $.ajax({
    url: `api/recipe/${recipeId}`,
    method: 'DELETE'
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
