require 'aws-sdk-s3'

class Api::RecipesController < ApplicationController

  attr_reader :recipes, :recipe
  attr_writer :recipe

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
    if @recipe.update(recipe_params)
      render "api/recipes/show"
    else
      raise "error"
    end
  end

  def create

    debugger
    
    recipe = {
      'id': params.id,
      'name': params.name,
      'recipe_type': params.recipe_type,
      'region': params.region,
      'vegan': params.vegan,
      'vegetarian': params.vegetarian,
      'pescetarian': params.pescetarian,
      'photo': params.photo,
      'ingredients': params.ingredients,
      'directions': params.directions
    }

    @recipe = Recipe.new(recipe)
    # .except(:format, :controller, :action)
    
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

  # private

  # def recipe_params
  #   params.require(:recipe).permit(
  #     :id, 
  #     :name, 
  #     :recipe_type, 
  #     :region, 
  #     :vegan, 
  #     :vegetarian, 
  #     :pescetarian,
  #     :photo, 
  #     ingredients: [],
  #     directions: [],
  #  )
  # end

end
