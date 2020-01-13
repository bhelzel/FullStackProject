class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.integer :recipe_id, null: false
      t.timestamps
    end
    add_index :collections, :user_id, unique: true
    add_index :collections, :recipe_id
  end
end
