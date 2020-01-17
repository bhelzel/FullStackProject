class Recipe < ApplicationRecord

  has_many :likes,
    primary_key: :id,
    foreign_key: :chirp_id,
    class_name: :Like

  has_one_attached :photo

end
