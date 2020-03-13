class Recipe < ApplicationRecord

  has_many :likes,
    primary_key: :id,
    foreign_key: :like_id,
    class_name: :Like

  has_one_attached :photo

end
