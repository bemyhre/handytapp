class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :zip
      t.float :rating
      t.string :coordinates

      t.timestamps
    end
  end
end
