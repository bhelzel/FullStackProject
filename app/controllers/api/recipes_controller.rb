class Api::RecipesController < ApplicationController

  attr_reader :recipes, :recipe

  def index
    @recipes = Recipe.all()
    render "api/recipes/index"
  end

  def show
    @recipe = Recipe.find(params[:id])
    render "api/recipes/show"
  end

  def edit
    @recipe = Recipe.find(params[:id])
    if @recipe.save!
      render "api/recipes/show"
    else
      raise "error"
    end
  end

  def create
    @recipe = Recipe.new(params[:name, :recipe_type, :region, :vegan, :vegetarian, :pescetarian, :ingredients, :directions])
    if @recipe.save!
      render "api/recipes/show"
    else
      raise "error"
    end
  end

  def delete
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render "api/recipes/index"
  end

  private

  def recipe_params
    params.require(:recipes).permit(:id, :name, :recipe_type, :region, :vegan, :vegetarian, :pescetarian, :ingredients, :directions)
  end

end
