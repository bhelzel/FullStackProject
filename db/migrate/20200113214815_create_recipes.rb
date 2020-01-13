class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.textarea :ingredients, null: false
      t.textarea :directions, null: false
      t.string :type, null: false
      t.string :region, null: false
      t.boolean :vegan, null: false
      t.boolean :vegetarian, null: false
      t.boolean :pescetarian, null: false
      t.integer :collection_id
      t.timestamps
    end
    add_index :recipes, :collection_id
  end
end
