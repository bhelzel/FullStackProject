class Like < ApplicationRecord
  validates :user_id, :recipe_id, presence: true

  belongs_to :recipe,
    primary_key: :id,
    foreign_key: :recipe_id,
    class_name: :Recipe

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
