class CreateBars < ActiveRecord::Migration
  def change
    create_table :bars do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :zip
      t.string :grade
      t.string :coordinates

      t.timestamps
    end
  end
end
