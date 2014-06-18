class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.belongs_to :style
      t.belongs_to :brewery
      t.string :name
      t.float :rating
      t.string :image
      t.timestamps
    end
  end
end
