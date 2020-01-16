class Recipe < ApplicationRecord

  has_and_belongs_to_many :collections, foreign_key: :recipe_id
  
  has_many :likes,
    primary_key: :id,
    foreign_key: :chirp_id,
    class_name: :Like

  has_one_attached :photo

end
