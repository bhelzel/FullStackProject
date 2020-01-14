class ChangeTypeColumnInRecipesTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :recipes, :type, :recipe_type
  end
end
