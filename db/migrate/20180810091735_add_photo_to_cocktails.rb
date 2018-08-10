class AddPhotoToCocktails < ActiveRecord::Migration[5.2]
  def change
    remove_column :cocktails, :picture_url
    add_column :cocktails, :photo, :string
  end
end
