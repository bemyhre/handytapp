class AddStateColumnToBreweries < ActiveRecord::Migration
  def change
    add_column :breweries, :state, :string
  end
end
