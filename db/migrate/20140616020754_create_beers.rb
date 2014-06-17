class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.belongs_to :brewery
      t.string :name
      t.string :style
      t.float :rating
      t.string :image
      t.timestamps
    end
  end
end
