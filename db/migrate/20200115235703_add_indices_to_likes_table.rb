class AddIndicesToLikesTable < ActiveRecord::Migration[5.2]

  def change
    add_index :likes, :user_id, unique: true
    add_index :likes, :recipe_id, unique: true
  end


end
