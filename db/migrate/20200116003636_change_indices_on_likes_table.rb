class ChangeIndicesOnLikesTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :user_id
    remove_index :likes, :recipe_id
    add_index :likes, :user_id
    add_index :likes, :recipe_id
  end
end
