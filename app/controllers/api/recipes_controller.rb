class Api::RecipesController < ApplicationController

  attr_reader :recipes, :recipe

  def index
    @recipes = Recipe.all()
    render "api/recipes/index"
  end

  def show
    @recipe = Recipe.find_by(id: [recipe_params[:id]])
    render "api/recipes/show"
  end

  private

  def recipe_params
    params.require(:recipes).permit(:id)
  end
end
