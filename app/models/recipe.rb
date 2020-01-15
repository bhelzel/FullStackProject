class Recipe < ApplicationRecord

  has_and_belongs_to_many :collections, foreign_key: :recipe_id

  has_one_attached :photo
  
end
