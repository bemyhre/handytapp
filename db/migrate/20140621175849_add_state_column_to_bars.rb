class AddStateColumnToBars < ActiveRecord::Migration
  def change
    add_column :bars, :state, :string
  end
end
