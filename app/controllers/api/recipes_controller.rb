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
    
    recipe = {}
    recipe['name'] = params['name']
    recipe['recipe_type'] = params['recipe_type']
    recipe['region'] = params['region']
    recipe['vegan'] = params['vegan']
    recipe['vegetarian'] = params['vegetarian']
    recipe['pescetarian'] = params['pescetarian']
    recipe['photo'] = params['photo']
    recipe['ingredients'] = params['ingredients']
    recipe['directions'] = params['directions']

    @recipe = Recipe.new(recipe)
    # .except(:format, :controller, :action)
    
    if @recipe.save!
      render "api/recipes/show"
    else
      raise "error"
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    # render "api/recipes/index"
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
