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
    if @recipe.update(recipe_params)
      render "api/recipes/show"
    else
      raise "error"
    end
  end

  def create
    s3 = AWS::S3::Resource.new(region: 'us-west-1')

    bucket = 'yummaly-aa-seeds'
    file = recipe_params[:photo]

    @recipe = Recipe.new(recipe_params)
    @recipe.photo.Attach(file)

    file_name = File.basename(file)
    obj = s3.bucket(bucket).object(file_name)

    obj.upload_file(file)
    # Create Recipe
    # Attach the photo
    # Upload the photo to S3
    # render the recipe show
    
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
    params.require(:recipe).permit(
      :id, 
      :name, 
      :recipe_type, 
      :region, 
      :vegan, 
      :vegetarian, 
      :pescetarian,
      :photo, 
      ingredients: [],
      directions: [],
    )
  end

end
