class Recipe < ApplicationRecord

  has_and_belongs_to_many :collections, foreign_key: :recipe_id

end
