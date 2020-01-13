class Collection < ApplicationRecord

  belongs_to :user, foreign_key: :user_id
  has_many: :recipes, foreign_key: :recipe_id
  
end
