class Api::LikesController < ApplicationController

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.recipe_id = params[:id]
    @like.save
    render "api/recipes/index"
  end

  def delete
    @like = Like.find(params[:id])
    @like.destroy
    render "api/users/show"
  end

end
