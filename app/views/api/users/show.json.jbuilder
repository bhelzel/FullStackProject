json.user do
  json.partial! "api/users/user", user: @user
end

json.likes do
  @user.likes.each do |like|
    json.set! like.id do
      json.extract! like, :recipe_id
    end
  end
end
