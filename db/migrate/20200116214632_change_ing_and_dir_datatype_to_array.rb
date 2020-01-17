class ChangeIngAndDirDatatypeToArray < ActiveRecord::Migration[5.2]
  def change
    drop_table :collections
    remove_column :recipes, :ingredients
    remove_column :recipes, :directions
    add_column :recipes, :ingredients, :text, array:true, null:false
    add_column :recipes, :directions, :text, array:true, null:false
  end
end
